import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {
  SiloCheckboxListModule,
  SiloDatePickerModule,
  SiloNumberBoxModule,
  SiloPhoneBoxModule,
  SiloQuillRichTextModule,
  SiloRadioListModule,
  SiloSingleSelectModule,
  SiloTextAreaModule,
  SiloTextBoxModule,
  SiloTimePickerModule,
} from '@silo/ngx';
import { PreviewViewComponent } from './preview-view.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    SiloCheckboxListModule,
    SiloDatePickerModule,
    SiloNumberBoxModule,
    SiloPhoneBoxModule,
    SiloQuillRichTextModule,
    SiloRadioListModule,
    SiloSingleSelectModule,
    SiloTextAreaModule,
    SiloTextBoxModule,
    SiloTimePickerModule,
  ],
  declarations: [PreviewViewComponent],
})
export class PreviewViewModule {}
