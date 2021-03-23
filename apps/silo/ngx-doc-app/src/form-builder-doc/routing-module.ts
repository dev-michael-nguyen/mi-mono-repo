import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INavListItemModel, RouterTabLayoutComponent } from '@silo/ngx';
import { DefinitionViewComponent } from './views/definition-view/definition-view.component';
import { DefinitionViewModule } from './views/definition-view/definition-view.module';
import { ListViewModule } from './views/list-view/list-view.module';

const routes: Routes = [
  {
    path: '',
    component: RouterTabLayoutComponent,
    data: {
      navList: [
        { label: 'Definition', routerLink: 'definition' },
      ] as Array<INavListItemModel>,
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'definition',
      },
      {
        path: 'definition',
        component: DefinitionViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    DefinitionViewModule,
    ListViewModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
