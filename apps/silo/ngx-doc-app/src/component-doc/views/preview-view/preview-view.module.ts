import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {
  SiloCheckboxListModule,
  SiloDatePickerModule,
  SiloPhoneBoxModule,
  SiloRadioListModule,
  SiloRichTextAreaModule,
  SiloSingleSelectModule,
  SiloTextAreaModule,
  SiloTextBoxModule,
} from '@silo/ngx';
import { PreviewViewComponent } from './preview-view.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    SiloCheckboxListModule,
    SiloDatePickerModule,
    SiloPhoneBoxModule,
    SiloRadioListModule,
    SiloRichTextAreaModule,
    SiloSingleSelectModule,
    SiloTextAreaModule,
    SiloTextBoxModule,
  ],
  declarations: [PreviewViewComponent],
})
export class PreviewViewModule {}
