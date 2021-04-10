import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextAreaModule } from './../../../../form-field/text/text-area/text-area.module';
import { TextAreaElementComponent } from './text-area-element.component';

@NgModule({
  imports: [CommonModule, TextAreaModule],
  declarations: [TextAreaElementComponent],
  exports: [TextAreaElementComponent],
})
export class TextAreaElementModule {}
