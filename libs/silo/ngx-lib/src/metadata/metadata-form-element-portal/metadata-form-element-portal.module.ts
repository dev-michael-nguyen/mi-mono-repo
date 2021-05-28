import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MetadataFormElementPortalComponent } from './metadata-form-element-portal.component';

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [MetadataFormElementPortalComponent],
  exports: [MetadataFormElementPortalComponent],
})
export class MetadataFormElementPortalModule {}
