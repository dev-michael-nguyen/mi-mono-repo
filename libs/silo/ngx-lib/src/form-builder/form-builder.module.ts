import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilderComponent } from './form-builder.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormBuilderComponent],
  exports: [FormBuilderComponent],
})
export class FormBuilderModule {}
