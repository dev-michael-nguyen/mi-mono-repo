import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DownloadProgressDialogComponent } from './download-progress-dialog.component';

@NgModule({
  imports: [CommonModule, MatProgressBarModule],
  declarations: [DownloadProgressDialogComponent],
  exports: [DownloadProgressDialogComponent],
})
export class DownloadProgressDialogModule {}
