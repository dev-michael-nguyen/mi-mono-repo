import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VerticalTimelineComponent } from './vertical-timeline.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VerticalTimelineComponent
  ],
  exports: [
    VerticalTimelineComponent
  ]
})
export class VerticalTimelineModule { }
