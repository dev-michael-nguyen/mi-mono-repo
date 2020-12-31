import { createCacheKey } from './utils/create-cache-key';
import { Logger } from './utils/logger';
import { ServiceWorkerMessageType } from './utils/service-worker-message-type';

// #region PROPERTIES ----------------------------------------------------------------

declare const self: any;
declare const registration: ServiceWorkerRegistration;

const SW_VERSION = '1.0.0';
const DEBUG_MODE = location.hostname === 'localhost';
const cacheNameConfig = {
  prefix: 'sw',
  name: 'manifest',
  suffix: registration ? registration.scope : '',
};

// Logger for debug purpose in debug mode
const logger = new Logger(`SW-${SW_VERSION}`, DEBUG_MODE);

// The manfiest is replaced at build time with the full list of assets to cache
// This is done by workbox-build-inject.js for the production build
const manifest: Array<any> = self.__WB_MANIFEST || [];

// Default directory index
const directoryIndex = 'index.html';
// Default SPA routes that will reroute to directory index
const directoryIndexRoutes: Array<string> = [
  '/offline'
];

// #endregion

// #region HANDLERS ----------------------------------------------------------------

self.addEventListener('message', (event: { data: any; }) => {
  if (!event || !event.data || !event.data.type) {
    return;
  }

  switch (event.data.type) {
    case ServiceWorkerMessageType.SKIP_WAITING:
      logger.log('Going to skip waiting and become active...');
      self.skipWaiting();
      break;
    case ServiceWorkerMessageType.CLAIM_CLIENTS:
      logger.log('Taking control of the clients...');
      self.clients.claim();
      break;
    case ServiceWorkerMessageType.CONTROL_CLIENTS:
      logger.log('Controlling clients...');
      break;
    case ServiceWorkerMessageType.DELETE_RUNTIME_CACHE:
      logger.log('Deleting runtime cache...');
      deleteCache();
      break;
    case ServiceWorkerMessageType.DOWNLOAD_MANIFEST:
      logger.log('Downloading manifest...');
      self.clients
        .matchAll({
          includeUncontrolled: false,
          type: 'window'
        })
        .then((clients) => {
          if (!clients || !clients.length) { return; }
          const total = manifest.length + event.data.additionalManifestUrls.length;
          let count = 0;

          manifest
            .map(entry => createCacheKey(entry).url)
            .concat(event.data.additionalManifestUrls.map(url => new URL(url, location.href).href))
            .forEach(url => {
              fetchFromNetwork(url)
                .then(() => {
                  count++;
                  const message = `Downloaded ${count}/${total} files...`;
                  const percent = Math.ceil(count * 100 / total);
                  logger.log(message, url);
                  clients[0].postMessage({ type: 'CURRENT_DOWNLOAD_PROGRESS', url, count, total, message, percent });
                });
            });
        });

      break;
  }
});

self.addEventListener('fetch', (event) => {
  // dont handle any request if there is network
  if (navigator.onLine) {
    return;
  }

  switch (event.request.method) {
    case 'GET':
      logger.log(`Fetching GET request ${event.request.url}...`);
      const cacheKey = getCacheKeyForURL(event.request.url);
      event.respondWith(fetchFromCache(cacheKey));
      break;
    default:
      break;
  }
});

// #endregion

// #region UTILS ----------------------------------------------------------------

function getCacheKeyForURL(url: string) {
  const urlObject = new URL(url, location.href);

  if (directoryIndex && urlObject.pathname.endsWith('/')) {
    const directoryURL = new URL(urlObject.href);
    directoryURL.pathname += directoryIndex;
    return directoryURL.href;
  }

  if (directoryIndex && directoryIndexRoutes.find(route => urlObject.pathname === route)) {
    return `${urlObject.origin}/${directoryIndex}`;
  }

  return urlObject.href;
}

function getCacheName() {
  return `${cacheNameConfig.prefix}-${cacheNameConfig.name}-${cacheNameConfig.suffix}`;
}

async function fetchFromCache(request: RequestInfo) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
  } catch (e) {
    logger.error(`Failed to get cached response for ${request}`, e);
  }
}

async function fetchFromNetwork(request: RequestInfo) {
  try {
    const networkResponse = await fetch(request);
    if (!networkResponse || !networkResponse.ok) {
      logger.error(`No network response for ${request}`);
      return networkResponse;
    }

    await addToCache(request, networkResponse);
    return networkResponse;
  } catch (e) {
    logger.error(`Failed to fetch and cache ${request}`, e);
  }
}

async function addToCache(request: RequestInfo, response: Response) {
  try {
    const cacheName = getCacheName();
    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());
  } catch (e) {
    logger.error(`Failed to add to cache ${request}`, e);
  }
}

async function deleteCache() {
  try {
    const cacheName = getCacheName();
    await caches.delete(cacheName);
  } catch (e) {
    logger.error(`Failed to delete cache`, e);
  }
}

// #endregion