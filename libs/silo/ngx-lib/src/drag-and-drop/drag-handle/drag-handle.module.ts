import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { DragHandleComponent } from './drag-handle.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatIconModule],
  declarations: [DragHandleComponent],
  exports: [DragHandleComponent],
})
export class DragHandleModule {}
