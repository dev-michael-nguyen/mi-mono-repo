import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragHandleModule } from './../../../drag-and-drop/drag-handle/drag-handle.module';
import { FormElementContainerComponent } from './form-element-definition-container.component';

@NgModule({
  imports: [CommonModule, DragHandleModule, FlexLayoutModule],
  declarations: [FormElementContainerComponent],
  exports: [FormElementContainerComponent],
})
export class FormElementContainerModule {}
