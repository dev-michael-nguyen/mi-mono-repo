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
      {
        path: 'single-select',
        loadChildren: () =>
          import(
            /* webpackChunkName: 'single-select-doc-module' */
            '../component-doc/single-select/routing.module'
          ).then((m) => m.RoutingModule),
      },
      {
        path: 'radio-list',
        loadChildren: () =>
          import(
            /* webpackChunkName: 'radio-list-doc-module' */
            '../component-doc/radio-list/routing.module'
          ).then((m) => m.RoutingModule),
      },
      {
        path: 'checkbox-list',
        loadChildren: () =>
          import(
            /* webpackChunkName: 'checkbox-list-doc-module' */
            '../component-doc/checkbox-list/routing.module'
          ).then((m) => m.RoutingModule),
      },
      {
        path: 'date-picker',
        loadChildren: () =>
          import(
            /* webpackChunkName: 'date-picker-doc-module' */
            '../component-doc/date-picker/routing.module'
          ).then((m) => m.RoutingModule),
      },
      {
        path: 'phone-box',
        loadChildren: () =>
          import(
            /* webpackChunkName: 'phone-box-doc-module' */
            '../component-doc/phone-box/routing.module'
          ).then((m) => m.RoutingModule),
      },
      {
        path: 'quill-rich-text',
        loadChildren: () =>
          import(
            /* webpackChunkName: 'quill-rich-text-doc-module' */
            '../component-doc/quill-rich-text/routing.module'
          ).then((m) => m.RoutingModule),
      },
      {
        path: 'time-picker',
        loadChildren: () =>
          import(
            /* webpackChunkName: 'time-picker-doc-module' */
            '../component-doc/time-picker/routing.module'
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
