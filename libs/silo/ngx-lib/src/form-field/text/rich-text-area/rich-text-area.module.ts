import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { SiloResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { SiloLabelModule } from '../../label/label.module';
import { SiloRichTextAreaComponent } from './rich-text-area.component';

@NgModule({
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    SiloLabelModule,
    SiloResponsiveContainerModule,
  ],
  declarations: [SiloRichTextAreaComponent],
  exports: [SiloRichTextAreaComponent],
})
export class SiloRichTextAreaModule {}
