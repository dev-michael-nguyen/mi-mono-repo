import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocViewComponent } from './views/doc-view/doc-view.component';
import { DocViewModule } from './views/doc-view/doc-view.module';

const routes: Routes = [
  {
    path: '',
    component: DocViewComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'text-box',
      },
      {
        path: 'text-box',
        loadChildren: () => import(
          /* webpackChunkName: 'text-box-module' */
          '../component-doc/text-box/routing.module').then(m => m.RoutingModule)
      },
      {
        path: 'text-area',
        loadChildren: () => import(
          /* webpackChunkName: 'text-area-module' */
          '../component-doc/text-area/routing.module').then(m => m.RoutingModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    DocViewModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }