import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  TextAreaModule,
  TextBoxModule,
} from '../../../../form-field/form-field.public-api';
import { GroupPropertyWindowComponent } from './group-property-window.component';

@NgModule({
  imports: [CommonModule, TextBoxModule, TextAreaModule],
  declarations: [GroupPropertyWindowComponent],
  exports: [GroupPropertyWindowComponent],
})
export class GroupPropertyWindowModule {}
