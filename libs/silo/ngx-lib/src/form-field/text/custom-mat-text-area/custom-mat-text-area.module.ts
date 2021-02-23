import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { CustomMatTextAreaComponent } from './custom-mat-text-area.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ResponsiveContainerModule,
  ],
  declarations: [CustomMatTextAreaComponent],
  exports: [CustomMatTextAreaComponent],
})
export class CustomMatTextAreaModule {}
