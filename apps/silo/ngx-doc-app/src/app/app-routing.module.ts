import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'components',
  },
  {
    path: 'components',
    loadChildren: () => import(
      /* webpackChunkName: 'component-doc' */
      '../component-doc/routing.module').then(m => m.RoutingModule),
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