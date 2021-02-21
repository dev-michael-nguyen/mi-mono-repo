import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './views/list-view/list-view.component';
import { ListViewModule } from './views/list-view/list-view.module';
import { PreviewViewComponent } from './views/preview-view/preview-view.component';
import { PreviewViewModule } from './views/preview-view/preview-view.module';

const routes: Routes = [
  {
    path: '',
    component: ListViewComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'preview',
      },
      {
        path: 'preview',
        component: PreviewViewComponent,
      },
      {
        path: 'text-box',
        loadChildren: () =>
          import(
            /* webpackChunkName: 'text-box-doc-module' */
            '../component-doc/text-box/routing.module'
          ).then((m) => m.RoutingModule),
      },
      {
        path: 'text-area',
        loadChildren: () =>
          import(
            /* webpackChunkName: 'text-area-doc-module' */
            '../component-doc/text-area/routing.module'
          ).then((m) => m.RoutingModule),
      },
    ],
  },
];

@NgModule({
  imports: [ListViewModule, PreviewViewModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
