import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationListLinkButtonModule } from '../navigation-list-link-button/navigation-list-link-button.module';
import { NavigationListComponent } from './navigation-list.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationListLinkButtonModule
  ],
  declarations: [
    NavigationListComponent
  ],
  exports: [
    NavigationListComponent
  ],
})
export class NavigationListModule { }
