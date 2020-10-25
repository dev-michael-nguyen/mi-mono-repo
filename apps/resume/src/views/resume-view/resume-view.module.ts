import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { NavigationSideBarModule } from '../../components/navigation-side-bar/navigation-side-bar.module';
import { ResumeViewComponent } from './resume-view.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'experience'
      },
      {
        path: 'experience',
        loadChildren: () => import(
          /* webpackChunkName: 'resume-experience-view' */
          '../experience-view/experience-view.module')
          .then(m => m.ExperienceViewModule)
      },
      {
        path: 'skill',
        loadChildren: () => import(
          /* webpackChunkName: 'resume-skill-view' */
          '../skill-view/skill-view.module')
          .then(m => m.SkillViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    NavigationSideBarModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ResumeViewComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ResumeViewModule { }
