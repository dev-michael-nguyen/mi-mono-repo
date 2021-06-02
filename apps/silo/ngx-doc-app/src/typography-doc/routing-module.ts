import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavListItemModel, RouterTabLayoutComponent } from '@silo/ngx';
import { ExampleViewComponent } from './views/example-view/example-view.component';
import { ExampleViewModule } from './views/example-view/example-view.module';

const routes: Routes = [
  {
    path: '',
    component: RouterTabLayoutComponent,
    data: {
      navList: [
        { label: 'Examples', routerLink: 'examples' },
      ] as Array<NavListItemModel>,
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'examples',
      },
      {
        path: 'examples',
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
