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
    loadChildren: () =>
      import(
        /* webpackChunkName: 'component-doc' */
        '../component-doc/routing.module'
      ).then((m) => m.RoutingModule),
  },
  {
    path: 'form-builder',
    loadChildren: () =>
      import(
        /* webpackChunkName: 'form-builder-doc' */
        '../form-builder-doc/routing-module'
      ).then((m) => m.RoutingModule),
  },
  {
    path: 'typography',
    loadChildren: () =>
      import(
        /* webpackChunkName: 'typography-doc' */
        '../typography-doc/routing-module'
      ).then((m) => m.RoutingModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
