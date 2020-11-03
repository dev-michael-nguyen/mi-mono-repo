import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'resume',
  },
  {
    path: 'resume',
    loadChildren: () => import(
      /* webpackChunkName: 'resume-view' */
      '../views/resume-view/resume-view.module')
      .then(m => m.ResumeViewModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
        initialNavigation: 'enabled'
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }