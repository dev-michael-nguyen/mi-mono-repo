import { InjectionToken, Provider } from '@angular/core';

export interface IServiceWorkerConfig {
  file: string;
  registerOptions: any;
  additionalManifestUrls: Array<string>;
}

export const SERVICE_WORKER_CONFIG = new InjectionToken<IServiceWorkerConfig>('SW_CONFIG');

export const ServiceWorkerConfigProvider: Provider = {
  provide: SERVICE_WORKER_CONFIG,
  useValue: {
    file: '/service-worker.js', // service worker file path relative to index.html
    registerOptions: {}, // workbox service worker register option
    additionalManifestUrls: [], // additional URL to be cached when downloading manifest
  } as IServiceWorkerConfig
};