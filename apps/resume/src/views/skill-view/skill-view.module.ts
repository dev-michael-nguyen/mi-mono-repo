import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { SkillViewComponent } from './skill-view.component';

const routes: Routes = [
  {
    path: '',
    component: SkillViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SkillViewComponent
  ],
  exports: [
    RouterModule
  ]
})
export class SkillViewModule { }
