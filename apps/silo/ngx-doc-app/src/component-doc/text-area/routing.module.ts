import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INavListItemModel, RouterTabLayoutComponent } from '@silo/ngx';
import { ExampleViewComponent } from './views/example-view/example-view.component';
import { ExampleViewModule } from './views/example-view/example-view.module';

const routes: Routes = [
  {
    path: '',
    component: RouterTabLayoutComponent,
    data: {
      navList: [
        { label: 'Example', routerLink: 'example' },
      ] as Array<INavListItemModel>,
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'example',
      },
      {
        path: 'example',
        component: ExampleViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [ExampleViewModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
