import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormElementDefinitionFormPortalComponent } from './form-element-definition-form-portal.component';

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [FormElementDefinitionFormPortalComponent],
  exports: [FormElementDefinitionFormPortalComponent],
})
export class FormElementDefinitionFormPortalModule {}
