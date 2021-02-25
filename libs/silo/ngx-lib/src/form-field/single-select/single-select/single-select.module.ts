import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { SiloResponsiveContainerModule } from './../../../responsive/responsive-container/responsive-container.module';
import { SiloLabelModule } from './../../label/label.module';
import { SiloSingleSelectComponent } from './single-select.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    SiloLabelModule,
    SiloResponsiveContainerModule,
  ],
  declarations: [SiloSingleSelectComponent],
  exports: [SiloSingleSelectComponent],
})
export class SiloSingleSelectModule {}
