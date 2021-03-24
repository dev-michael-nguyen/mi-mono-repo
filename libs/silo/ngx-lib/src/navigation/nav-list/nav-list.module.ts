import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { StickyLayoutModule } from './../../layout/sticky-layout/sticky-layout.module';
import { NavListComponent } from './nav-list.component';

@NgModule({
  imports: [CommonModule, MatListModule, RouterModule, StickyLayoutModule],
  declarations: [NavListComponent],
  exports: [NavListComponent],
})
export class NavListModule {}
