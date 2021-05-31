import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MetadataFormElementPortalModule } from '../metadata-form-element-portal/metadata-form-element-portal.module';
import { MetadataFormGroupPortalModule } from '../metadata-form-group-portal/metadata-form-group-portal.module';
import { MetadataFormComponent } from './metadata-form.component';

@NgModule({
  imports: [
    CommonModule,
    MetadataFormElementPortalModule,
    MetadataFormGroupPortalModule,
  ],
  declarations: [MetadataFormComponent],
  exports: [MetadataFormComponent],
})
export class MetadataFormModule {}
