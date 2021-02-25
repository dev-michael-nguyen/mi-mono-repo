import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SiloNavListModule, StickyLayoutModule } from '@silo/ngx';
import { ListViewComponent } from './list-view.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    SiloNavListModule,
    StickyLayoutModule,
  ],
  declarations: [ListViewComponent],
})
export class ListViewModule {}
