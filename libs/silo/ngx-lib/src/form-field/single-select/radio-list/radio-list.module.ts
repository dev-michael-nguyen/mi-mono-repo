import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { LabelModule } from '../../label/label.module';
import { RadioListComponent } from './radio-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    LabelModule,
    ResponsiveContainerModule,
  ],
  declarations: [RadioListComponent],
  exports: [RadioListComponent],
})
export class RadioListModule {}
