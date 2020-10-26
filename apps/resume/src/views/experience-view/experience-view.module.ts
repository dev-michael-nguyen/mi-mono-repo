import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { VerticalTimelineModule } from '../../components/vertical-timeline/vertical-timeline.module';
import { ExperienceViewComponent } from './experience-view.component';

const routes: Routes = [
  {
    path: '',
    component: ExperienceViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    VerticalTimelineModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ExperienceViewComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ExperienceViewModule { }
