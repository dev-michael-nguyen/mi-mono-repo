import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ApplicationService } from './application.service';
import { DownloadProgressDialogModule } from './components/download-progress-dialog/download-progress-dialog.module';
import { UpdateDialogModule } from './components/update-dialog/update-dialog.module';
import { EnableSwProvider } from './providers/enable-sw.provider';
import { InitApplicationServiceProvider } from './providers/init-application.provider';
import { IsProductionProvider } from './providers/is-production.provider';
import { ServiceWorkerConfigProvider } from './providers/service-worker-config.provider';

@NgModule({
  imports: [DownloadProgressDialogModule, MatDialogModule, UpdateDialogModule],
  providers: [
    // providers first
    EnableSwProvider,
    InitApplicationServiceProvider,
    IsProductionProvider,
    ServiceWorkerConfigProvider,
    // application service last
    ApplicationService,
  ],
})
export class OfflineModule {}
