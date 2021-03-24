import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {
  CheckboxListModule,
  DatePickerModule,
  NumberBoxModule,
  PhoneBoxModule,
  QuillRichTextModule,
  RadioListModule,
  SingleSelectModule,
  TextAreaModule,
  TextBoxModule,
  TimePickerModule,
} from '@silo/ngx';
import { PreviewViewComponent } from './preview-view.component';

@NgModule({
  imports: [
    CheckboxListModule,
    CommonModule,
    DatePickerModule,
    FlexLayoutModule,
    NumberBoxModule,
    PhoneBoxModule,
    QuillRichTextModule,
    RadioListModule,
    RouterModule,
    SingleSelectModule,
    TextAreaModule,
    TextBoxModule,
    TimePickerModule,
  ],
  declarations: [PreviewViewComponent],
})
export class PreviewViewModule {}
