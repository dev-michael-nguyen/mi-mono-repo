import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormElementModule } from './../../form-element/form-element.module';
import { FormGroupElementComponent } from './form-group-element.component';

@NgModule({
  imports: [CommonModule, FormElementModule],
  declarations: [FormGroupElementComponent],
  exports: [FormGroupElementComponent],
})
export class FormGroupElementModule {}
