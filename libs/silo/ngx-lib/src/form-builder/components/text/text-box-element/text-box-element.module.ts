import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextBoxModule } from '../../../../form-field/text/text-box/text-box.module';
import { TextBoxElementComponent } from './text-box-element.component';

@NgModule({
  imports: [CommonModule, TextBoxModule],
  declarations: [TextBoxElementComponent],
  exports: [TextBoxElementComponent],
})
export class TextBoxElementModule {}
