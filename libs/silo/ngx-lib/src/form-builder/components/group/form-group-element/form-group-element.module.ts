import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormElementPortalModule } from '../../form-element-portal/form-element-portal.module';
import { FormElementContainerModule } from './../../form-element-definition-container/form-element-definition-container.module';
import { FormGroupElementComponent } from './form-group-element.component';

@NgModule({
  imports: [CommonModule, FormElementContainerModule, FormElementPortalModule],
  declarations: [FormGroupElementComponent],
  exports: [FormGroupElementComponent],
})
export class FormGroupElementModule {}
