import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextBoxModule } from '../../../../form-field/text/text-box/text-box.module';
import { FormElementContainerModule } from './../../form-element-definition-container/form-element-definition-container.module';
import { TextBoxElementComponent } from './text-box-element.component';

@NgModule({
  imports: [CommonModule, FormElementContainerModule, TextBoxModule],
  declarations: [TextBoxElementComponent],
  exports: [TextBoxElementComponent],
})
export class TextBoxElementModule {}
