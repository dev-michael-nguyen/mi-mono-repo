import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavigationListLinkButtonComponent } from './navigation-list-link-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatBadgeModule,
    MatIconModule,
    RouterModule,
  ],
  declarations: [
    NavigationListLinkButtonComponent
  ],
  exports: [
    NavigationListLinkButtonComponent
  ],
})
export class NavigationListLinkButtonModule { }
