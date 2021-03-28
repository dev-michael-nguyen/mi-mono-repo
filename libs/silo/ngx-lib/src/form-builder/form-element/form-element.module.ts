import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormElementComponent } from './form-element.component';

@NgModule({
  imports: [CommonModule, PortalModule, FlexLayoutModule],
  declarations: [FormElementComponent],
  exports: [FormElementComponent],
})
export class FormElementModule {}
