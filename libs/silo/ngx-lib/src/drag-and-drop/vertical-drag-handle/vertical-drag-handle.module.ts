import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { VerticalDragHandleComponent } from './vertical-drag-handle.component';

@NgModule({
  imports: [CommonModule, MatIconModule, FlexLayoutModule],
  declarations: [VerticalDragHandleComponent],
  exports: [VerticalDragHandleComponent],
})
export class VerticalDragHandleModule {}
