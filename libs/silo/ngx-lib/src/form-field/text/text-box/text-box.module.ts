import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { LabelModule } from './../../label/label.module';
import { TextBoxComponent } from './text-box.component';

@NgModule({
  imports: [
    CommonModule,
    LabelModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ResponsiveContainerModule,
  ],
  declarations: [TextBoxComponent],
  exports: [TextBoxComponent],
})
export class TextBoxModule {}
