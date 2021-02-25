import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { SiloResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { SiloLabelModule } from '../../label/label.module';
import { SiloRadioListComponent } from './radio-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule,
    SiloLabelModule,
    SiloResponsiveContainerModule,
  ],
  declarations: [SiloRadioListComponent],
  exports: [SiloRadioListComponent],
})
export class SiloRadioListModule {}
