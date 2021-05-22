import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { PrettierBytesModule } from '../../../pipes/prettier-bytes/prettier-bytes.module';
import { ResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { UppyFileDashboardComponent } from './uppy-file-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    PrettierBytesModule,
    ResponsiveContainerModule,
  ],
  declarations: [UppyFileDashboardComponent],
  exports: [UppyFileDashboardComponent],
})
export class UppyFileDashboardModule {}
