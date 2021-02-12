import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { TextBoxComponent } from './text-box.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    ResponsiveContainerModule
  ],
  declarations: [
    TextBoxComponent
  ],
  exports: [
    TextBoxComponent
  ],
})
export class TextBoxModule { } 