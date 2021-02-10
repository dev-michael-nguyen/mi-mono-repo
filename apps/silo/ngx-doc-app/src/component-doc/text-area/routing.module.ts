import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INavListItemModel, RouterTabLayoutComponent } from '@silo/ngx';
import { ExampleViewComponent } from './views/example-view/example-view.component';

const routes: Routes = [
  {
    path: '',
    component: RouterTabLayoutComponent,
    data: {
      navList: [
        { label: 'Example', routerLink: 'example' }
      ] as Array<INavListItemModel>
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'example',
      },
      {
        path: 'example',
        component: ExampleViewComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }