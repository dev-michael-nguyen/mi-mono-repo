import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { UppyFileDashboardComponent } from './uppy-file-dashboard.component';

@NgModule({
  imports: [CommonModule, ResponsiveContainerModule],
  declarations: [UppyFileDashboardComponent],
  exports: [UppyFileDashboardComponent],
})
export class UppyFileDashboardModule {}
