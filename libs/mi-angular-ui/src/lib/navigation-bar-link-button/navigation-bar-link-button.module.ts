import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavigationBarLinkButtonComponent } from './navigation-bar-link-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
  ],
  declarations: [
    NavigationBarLinkButtonComponent
  ],
  entryComponents: [
    NavigationBarLinkButtonComponent
  ],
  exports: [
    NavigationBarLinkButtonComponent
  ],
})
export class NavigationBarLinkButtonModule { }
