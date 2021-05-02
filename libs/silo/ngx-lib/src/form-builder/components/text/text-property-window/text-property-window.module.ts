import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextAreaModule } from '../../../../form-field/text/text-area/text-area.module';
import { TextBoxModule } from '../../../../form-field/text/text-box/text-box.module';
import { MetadataFormModule } from '../../../../metadata/metadata-form/metadata-form.module';
import { TextPropertyWindowComponent } from './text-property-window.component';

@NgModule({
  imports: [CommonModule, TextBoxModule, TextAreaModule, MetadataFormModule],
  declarations: [TextPropertyWindowComponent],
  exports: [TextPropertyWindowComponent],
})
export class TextPropertyWindowModule {}
