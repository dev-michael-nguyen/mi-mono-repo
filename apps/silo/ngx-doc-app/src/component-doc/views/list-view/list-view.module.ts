import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NavListModule, StickyLayoutModule } from '@silo/ngx';
import { ListViewComponent } from './list-view.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    NavListModule,
    RouterModule,
    StickyLayoutModule,
  ],
  declarations: [ListViewComponent],
})
export class ListViewModule {}
