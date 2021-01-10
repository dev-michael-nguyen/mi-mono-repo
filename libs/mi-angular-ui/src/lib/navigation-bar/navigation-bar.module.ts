import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavigationBarLinkButtonModule } from '../navigation-bar-link-button/navigation-bar-link-button.module';
import { NavigationBarComponent } from './navigation-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    NavigationBarLinkButtonModule,
    RouterModule
  ],
  declarations: [
    NavigationBarComponent
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class NavigationBarModule { }
