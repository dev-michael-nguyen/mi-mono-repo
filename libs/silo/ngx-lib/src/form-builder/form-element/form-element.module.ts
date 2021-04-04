import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { DragHandleModule } from './../../drag-and-drop/drag-handle/drag-handle.module';
import { FormElementComponent } from './form-element.component';

@NgModule({
  imports: [
    CommonModule,
    DragHandleModule,
    FlexLayoutModule,
    MatButtonModule,
    PortalModule,
  ],
  declarations: [FormElementComponent],
  exports: [FormElementComponent],
})
export class FormElementModule {}
