import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SiloNavListModule, StickyLayoutModule } from '@silo/ngx';
import { DocViewComponent } from './doc-view.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    SiloNavListModule,
    StickyLayoutModule
  ],
  declarations: [DocViewComponent]
})
export class DocViewModule { }
