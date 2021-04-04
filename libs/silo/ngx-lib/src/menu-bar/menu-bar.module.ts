import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuBarButtonDirective } from './menu-bar-button.directive';
import { MenuBarComponent } from './menu-bar.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatIconModule],
  declarations: [MenuBarComponent, MenuBarButtonDirective],
  exports: [MenuBarComponent, MenuBarButtonDirective],
})
export class MenuBarModule {}
