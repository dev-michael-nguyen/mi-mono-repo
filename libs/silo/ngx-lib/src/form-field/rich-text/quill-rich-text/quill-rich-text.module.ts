import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { ResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { LabelModule } from '../../label/label.module';
import { QuillRichTextComponent } from './quill-rich-text.component';

@NgModule({
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    LabelModule,
    ResponsiveContainerModule,
  ],
  declarations: [QuillRichTextComponent],
  exports: [QuillRichTextComponent],
})
export class QuillRichTextModule {}
