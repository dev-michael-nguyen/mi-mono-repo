import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocViewComponent } from './views/doc-view/doc-view.component';
import { DocViewModule } from './views/doc-view/doc-view.module';

const routes: Routes = [
  {
    path: '',
    component: DocViewComponent,
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