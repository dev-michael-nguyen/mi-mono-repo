import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MetadataFormElementPortalModule } from '../metadata-form-element-portal/metadata-form-element-portal.module';
import { MetadataTemplateRegistryService } from '../services/metadata-template-registry.service';
import { MetadataFormGroupPortalComponent } from './metadata-form-group-portal.component';

@NgModule({
  imports: [CommonModule, MetadataFormElementPortalModule],
  declarations: [MetadataFormGroupPortalComponent],
  exports: [MetadataFormGroupPortalComponent],
})
export class MetadataFormGroupPortalModule {
  constructor(
    metadataTemplateRegistryService: MetadataTemplateRegistryService,
  ) {
    metadataTemplateRegistryService.register('FormGroup', {
      templateIdentifier: 'FormGroup',
      metadataComponent: MetadataFormGroupPortalComponent,
    });
  }
}
