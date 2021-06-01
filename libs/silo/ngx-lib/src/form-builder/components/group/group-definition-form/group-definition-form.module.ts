import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MetadataFormModule } from '../../../../metadata/metadata-form/metadata-form.module';
import { GroupDefinitionFormComponent } from './group-definition-form.component';

@NgModule({
  imports: [CommonModule, MetadataFormModule],
  declarations: [GroupDefinitionFormComponent],
  exports: [GroupDefinitionFormComponent],
})
export class GroupDefinitionFormModule {}
