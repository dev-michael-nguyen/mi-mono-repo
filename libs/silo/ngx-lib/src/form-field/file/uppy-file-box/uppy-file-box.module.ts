import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { LabelModule } from '../../label/label.module';
import { UppyFileBoxComponent } from './uppy-file-box.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    LabelModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    ResponsiveContainerModule,
  ],
  declarations: [UppyFileBoxComponent],
  exports: [UppyFileBoxComponent],
})
export class UppyFileBoxModule {}
