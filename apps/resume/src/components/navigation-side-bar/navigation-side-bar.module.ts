import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavigationSideBarComponent } from './navigation-side-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    RouterModule,
  ],
  declarations: [
    NavigationSideBarComponent
  ],
  exports: [
    NavigationSideBarComponent
  ]
})
export class NavigationSideBarModule { }
