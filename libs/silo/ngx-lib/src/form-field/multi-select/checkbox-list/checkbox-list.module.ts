import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { LabelModule } from '../../label/label.module';
import { CheckboxListComponent } from './checkbox-list.component';

@NgModule({
  imports: [
    CommonModule,
    LabelModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    ResponsiveContainerModule,
  ],
  declarations: [CheckboxListComponent],
  exports: [CheckboxListComponent],
})
export class CheckboxListModule {}
