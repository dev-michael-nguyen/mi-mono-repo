import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {
  BooleanCheckboxModule,
  CheckboxListModule,
  DatePickerModule,
  NumberBoxModule,
  PhoneBoxModule,
  QuillRichTextModule,
  RadioListModule,
  SingleAutocompleteModule,
  SingleSelectModule,
  TextAreaModule,
  TextBoxModule,
  TimePickerModule,
  UppyFileBoxModule,
} from '@silo/ngx';
import { PreviewArticleModule } from '../../../components/preview-article/preview-article.module';
import { PreviewViewComponent } from './preview-view.component';

@NgModule({
  imports: [
    BooleanCheckboxModule,
    CheckboxListModule,
    CommonModule,
    DatePickerModule,
    FlexLayoutModule,
    FlexLayoutModule,
    NumberBoxModule,
    PhoneBoxModule,
    PreviewArticleModule,
    QuillRichTextModule,
    RadioListModule,
    RouterModule,
    SingleAutocompleteModule,
    SingleSelectModule,
    TextAreaModule,
    TextBoxModule,
    TimePickerModule,
    UppyFileBoxModule,
  ],
  declarations: [PreviewViewComponent],
})
export class PreviewViewModule {}
