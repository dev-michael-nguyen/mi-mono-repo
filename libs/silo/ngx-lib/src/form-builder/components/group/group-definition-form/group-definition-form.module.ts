import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  TextAreaModule,
  TextBoxModule,
} from '../../../../form-field/form-field.public-api';
import { GroupDefinitionFormComponent } from './group-definition-form.component';

@NgModule({
  imports: [CommonModule, TextBoxModule, TextAreaModule],
  declarations: [GroupDefinitionFormComponent],
  exports: [GroupDefinitionFormComponent],
})
export class GroupDefinitionFormModule {}
