import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextAreaModule } from '../../../../form-field/text/text-area/text-area.module';
import { TextBoxModule } from '../../../../form-field/text/text-box/text-box.module';
import { MetadataFormModule } from '../../../../metadata/metadata-form/metadata-form.module';
import { TextDefinitionFormComponent } from './text-definition-form.component';

@NgModule({
  imports: [CommonModule, TextBoxModule, TextAreaModule, MetadataFormModule],
  declarations: [TextDefinitionFormComponent],
  exports: [TextDefinitionFormComponent],
})
export class TextDefinitionFormModule {}
