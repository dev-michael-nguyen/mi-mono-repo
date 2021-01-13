import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavListComponent } from './nav-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
  ],
  declarations: [NavListComponent],
  exports: [NavListComponent],
})
export class NavListModule { }
