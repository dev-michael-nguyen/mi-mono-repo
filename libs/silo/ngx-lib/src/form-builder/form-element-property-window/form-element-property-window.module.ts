import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormElementPropertyWindowComponent } from './form-element-property-window.component';

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [FormElementPropertyWindowComponent],
  exports: [FormElementPropertyWindowComponent],
})
export class FormElementPropertyWindowModule {}
