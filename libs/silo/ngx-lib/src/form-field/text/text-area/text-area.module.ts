import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SiloResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { SiloLabelModule } from './../../label/label.module';
import { SiloTextAreaComponent } from './text-area.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SiloLabelModule,
    SiloResponsiveContainerModule,
  ],
  declarations: [SiloTextAreaComponent],
  exports: [SiloTextAreaComponent],
})
export class SiloTextAreaModule {}
