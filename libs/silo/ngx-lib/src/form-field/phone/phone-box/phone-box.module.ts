import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { LabelModule } from '../../label/label.module';
import { PhoneBoxComponent } from './phone-box.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    LabelModule,
    ResponsiveContainerModule,
  ],
  declarations: [PhoneBoxComponent],
  exports: [PhoneBoxComponent],
})
export class PhoneBoxModule {}
