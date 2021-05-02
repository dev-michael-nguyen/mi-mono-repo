import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextAreaComponent } from '../../form-field/form-field.public-api';
import { TextBoxComponent } from '../../form-field/text/text-box/text-box.component';
import { MetadataTemplateRegistryService } from '../services/metadata-template-registry.service';
import { MetadataFormComponent } from './metadata-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MetadataFormComponent],
  exports: [MetadataFormComponent],
})
export class MetadataFormModule {
  constructor(
    metadataTemplateRegistryService: MetadataTemplateRegistryService,
  ) {
    metadataTemplateRegistryService.register('TextBox', {
      componentType: TextBoxComponent,
    });
    metadataTemplateRegistryService.register('TextArea', {
      componentType: TextAreaComponent,
    });
  }
}
