import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorage } from 'ngx-store';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { filter, first, map, startWith } from 'rxjs/operators';
import { Workbox } from 'workbox-window';
import { DownloadProgressDialogComponent } from './components/download-progress-dialog/download-progress-dialog.component';
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';
import { ENABLE_SW } from './providers/enable-sw.provider';
import { IS_PRODUCTION } from './providers/is-production.provider';
import {
  IServiceWorkerConfig,
  SERVICE_WORKER_CONFIG,
} from './providers/service-worker-config.provider';
import { Logger } from './utils/logger';
import { ServiceWorkerMessageType } from './utils/service-worker-message-type';

export interface IApplicationServiceResponse {
  hasError: boolean;
  responseMessages?: Array<{ responseMessageType: number; value: string }>;
}

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  wb: Workbox;
  swRegistration: ServiceWorkerRegistration;
  logger = new Logger('Application Service', true);
  isSwSupported = false;
  hasActivatedSw = false;

  @LocalStorage() isManifestDownloaded;

  private readonly _isOnline$: Observable<boolean> = merge(
    fromEvent(window, 'offline'),
    fromEvent(window, 'online'),
  ).pipe(
    map(() => navigator.onLine),
    startWith(navigator.onLine),
  );

  readonly isOnline$ = new BehaviorSubject(navigator.onLine);
  readonly isReady$ = new BehaviorSubject(false);
  readonly isNewVersionAvailable$ = new BehaviorSubject(false);
  readonly isUpdating$ = new BehaviorSubject(false);
  readonly isUpdateRequested$ = new BehaviorSubject(false);
  readonly isManifestDownloaded$ = new BehaviorSubject(false);
  readonly isOfflineRoute$ = new BehaviorSubject(false);

  constructor(
    private _matDialog: MatDialog,
    @Inject(ENABLE_SW) public enableSw: boolean,
    @Inject(IS_PRODUCTION) public isProduction: boolean,
    @Inject(SERVICE_WORKER_CONFIG) public config: IServiceWorkerConfig,
  ) {
    this._isOnline$.subscribe((isOnline) => {
      this.isOnline$.next(isOnline);
    });

    this.isManifestDownloaded$ = new BehaviorSubject(this.isManifestDownloaded);
    this.isManifestDownloaded$.subscribe(
      (value) => (this.isManifestDownloaded = value),
    );

    this.isSwSupported = 'serviceWorker' in navigator;
    this.hasActivatedSw =
      this.isSwSupported &&
      navigator.serviceWorker.controller &&
      navigator.serviceWorker.controller.state === 'activated';

    if (this.isSwSupported) {
      if (this.hasActivatedSw) {
        navigator.serviceWorker
          .getRegistrations()
          .then((registrations) => {
            return registrations.map((r) => r.unregister());
          })
          .then(() => {
            this.registerServiceWorker();
          });
      } else {
        this.registerServiceWorker();
      }
    } else {
      // TODO: Register alternative if SW is not supported
    }
  }

  isReady() {
    const isReady$ = new Observable((observer) => {
      this.isReady$
        .pipe(
          filter((isReady) => isReady),
          first(),
        )
        .subscribe(() => {
          observer.next(true);
          observer.complete();
        });
    });

    return isReady$;
  }

  registerServiceWorker() {
    if (!this.enableSw) {
      this.logger.log('Service worker is not enable.');
      this.isReady$.next(true);
      return;
    }

    if (!this.isSwSupported) {
      this.logger.log('Service worker is not supported.');
      this.isReady$.next(true);
      return;
    }

    this.wb = new Workbox(this.config.file, this.config.registerOptions || {});

    /**
     * Detect when service worker is activated.
     */
    this.wb.addEventListener('activated', (event) => {
      // do nothing if activated is coming from an update event
      if (event.isUpdate) {
        return;
      }

      this.wb.messageSW({ type: ServiceWorkerMessageType.CLAIM_CLIENTS });
      this.isReady$.next(true);
    });

    /**
     * Detect when service worker is controling clients.
     */
    this.wb.addEventListener('controlling', () => {
      this.wb.messageSW({ type: ServiceWorkerMessageType.CONTROL_CLIENTS });
      this.isReady$.next(true);
    });

    /**
     * Detect when new version is going to waiting.
     */
    this.wb.addEventListener('waiting', () => {
      this.logger.log('New version is waiting to be updated...');
      this.isNewVersionAvailable$.next(true);

      // show user that updates are available.
      const dialogRef = this.showUpdateDialog();

      // if user request updates, update then reload when the service worker became active
      this.isUpdateRequested$
        .pipe(
          filter((isUpdateRequested) => isUpdateRequested),
          first(),
        )
        .subscribe(() => {
          this.wb.addEventListener('controlling', () => {
            this.logger.log('New version is activated. Reloading...');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          });

          this.logger.log('New version is updating...');
          this.wb.messageSW({
            type: ServiceWorkerMessageType.DELETE_RUNTIME_CACHE,
          });
          this.isManifestDownloaded$.next(false);
          dialogRef.componentInstance.isUpdating$.next(true);
          this.isUpdating$.next(true);
          this.wb.messageSW({ type: ServiceWorkerMessageType.SKIP_WAITING });
        });
    });

    /**
     * Detect when another service worker is going to waiting.
     * REF: https://developers.google.com/web/tools/workbox/modules/workbox-window#when_an_unexpected_version_of_the_service_worker_is_found
     */
    this.wb.addEventListener('externalwaiting', (event) => {
      this.logger.log('New service worker is waiting to be updated...');
      this.isNewVersionAvailable$.next(true);

      // show user that updates are available.
      const dialogRef = this.showUpdateDialog();

      // if user request updates, update then reload when the service worker became active
      this.isUpdateRequested$
        .pipe(
          filter((isUpdateRequested) => isUpdateRequested),
          first(),
        )
        .subscribe(() => {
          this.wb.addEventListener('externalactivated', () => {
            this.logger.log('New service worker is activated. Reloading...');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          });

          this.logger.log('New service worker is updating...');
          event.sw.postMessage({
            type: ServiceWorkerMessageType.DELETE_RUNTIME_CACHE,
          });
          dialogRef.componentInstance.isUpdating$.next(true);
          this.isUpdating$.next(true);
          event.sw.postMessage({ type: ServiceWorkerMessageType.SKIP_WAITING });
        });
    });

    this.wb
      .register()
      .then((serviceWorkerRegistration: ServiceWorkerRegistration) => {
        this.swRegistration = serviceWorkerRegistration;

        if (navigator.serviceWorker && navigator.serviceWorker.controller) {
          this.isReady$.next(true);
        }
      });
  }

  showUpdateDialog() {
    const dialogRef = this._matDialog.open(UpdateDialogComponent, {
      disableClose: true,
      autoFocus: false,
      width: '500px',
    });
    dialogRef.componentInstance.isUpdateRequested$
      .pipe(
        filter((isUpdateRequested) => isUpdateRequested),
        first(),
      )
      .subscribe(() => {
        this.isUpdateRequested$.next(true);
      });

    return dialogRef;
  }

  showDownloadProgressDialog() {
    const dialogRef = this._matDialog.open(DownloadProgressDialogComponent, {
      disableClose: true,
      width: '500px',
    });

    return dialogRef;
  }

  downloadManifest(showDownloadProgressDialog = true) {
    // success if manifest is already downloaded
    if (this.isManifestDownloaded$.value) {
      return this.generateSuccessResponse();
    }

    // error if there is no connection
    if (!this.isOnline$.value) {
      return this.generateErrorResponse(
        'Cannot download offline resources because there is no connection.',
      );
    }

    if (this.isSwSupported) {
      this.isManifestDownloaded$.next(false);
      const dialogRef = showDownloadProgressDialog
        ? this.showDownloadProgressDialog()
        : null;
      navigator.serviceWorker.onmessage = (event) => {
        if (!event || !event.data || !event.data.type) {
          return;
        }

        switch (event.data.type) {
          case 'CURRENT_DOWNLOAD_PROGRESS':
            if (event.data.percent === 100) {
              this.isManifestDownloaded$.next(true);
            }

            if (dialogRef && dialogRef.componentInstance) {
              dialogRef.componentInstance.message$.next(event.data.message);
              dialogRef.componentInstance.percent$.next(event.data.percent);
            }

            break;
        }
      };

      if (this.hasActivatedSw) {
        navigator.serviceWorker.controller.postMessage({
          type: ServiceWorkerMessageType.DOWNLOAD_MANIFEST,
          additionalManifestUrls: this.config.additionalManifestUrls,
        });
      } else {
        return this.generateErrorResponse(
          'Cannot download offline resources because there is no active SW.',
        );
      }

      return new Observable<IApplicationServiceResponse>((observer) => {
        this.isManifestDownloaded$
          .pipe(
            filter((value) => value),
            first(),
          )
          .subscribe(() => {
            observer.next({ hasError: false });
            observer.complete();
          });
      });
    } else {
      // TODO: Download alternative if SW is not supported
      return this.generateErrorResponse(
        'Cannot download offline resources because SW is not suported.',
      );
    }
  }

  generateSuccessResponse() {
    return new Observable<IApplicationServiceResponse>((observer) => {
      observer.next({
        hasError: false,
      });
      observer.complete();
    });
  }

  generateErrorResponse(message: string) {
    return new Observable<IApplicationServiceResponse>((observer) => {
      observer.next({
        hasError: true,
        responseMessages: [{ responseMessageType: 3, value: message }],
      });
      observer.complete();
    });
  }
}
