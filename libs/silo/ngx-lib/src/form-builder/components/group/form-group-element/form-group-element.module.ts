import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormElementPortalModule } from '../../form-element-portal/form-element-portal.module';
import { FormGroupElementComponent } from './form-group-element.component';

@NgModule({
  imports: [CommonModule, FormElementPortalModule],
  declarations: [FormGroupElementComponent],
  exports: [FormGroupElementComponent],
})
export class FormGroupElementModule {}
