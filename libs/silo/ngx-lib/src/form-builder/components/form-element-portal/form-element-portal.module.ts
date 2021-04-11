import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormElementPortalComponent } from './form-element-portal.component';

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [FormElementPortalComponent],
  exports: [FormElementPortalComponent],
})
export class FormElementPortalModule {}
