import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MetadataFormModule } from '../../../../metadata/metadata-form/metadata-form.module';
import { TextDefinitionFormComponent } from './text-definition-form.component';

@NgModule({
  imports: [CommonModule, MetadataFormModule],
  declarations: [TextDefinitionFormComponent],
  exports: [TextDefinitionFormComponent],
})
export class TextDefinitionFormModule {}
