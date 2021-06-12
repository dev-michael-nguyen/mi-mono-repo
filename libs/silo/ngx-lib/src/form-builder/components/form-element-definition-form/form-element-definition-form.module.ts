import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MetadataFormModule } from '../../../metadata/metadata-components.public-api';
import { FormElementDefinitionFormComponent } from './form-element-definition-form.component';

@NgModule({
  imports: [CommonModule, MetadataFormModule],
  declarations: [FormElementDefinitionFormComponent],
  exports: [FormElementDefinitionFormComponent],
})
export class FormElementDefinitionFormModule {}
