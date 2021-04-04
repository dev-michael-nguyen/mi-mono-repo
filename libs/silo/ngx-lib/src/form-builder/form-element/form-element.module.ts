import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { VerticalDragHandleModule } from './../../drag-and-drop/vertical-drag-handle/vertical-drag-handle.module';
import { MenuBarModule } from './../../menu-bar/menu-bar.module';
import { FormElementComponent } from './form-element.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MenuBarModule,
    MatButtonModule,
    PortalModule,
    VerticalDragHandleModule,
  ],
  declarations: [FormElementComponent],
  exports: [FormElementComponent],
})
export class FormElementModule {}
