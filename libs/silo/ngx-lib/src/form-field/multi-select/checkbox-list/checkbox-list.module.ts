import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { SiloResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { SiloLabelModule } from '../../label/label.module';
import { SiloCheckboxListComponent } from './checkbox-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    ReactiveFormsModule,
    SiloLabelModule,
    SiloResponsiveContainerModule,
  ],
  declarations: [SiloCheckboxListComponent],
  exports: [SiloCheckboxListComponent],
})
export class SiloCheckboxListModule {}
