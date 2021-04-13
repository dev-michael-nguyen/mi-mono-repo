import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ControlMenuBarButtonDirective } from './control-menu-bar-button.directive';
import { ControlMenuBarComponent } from './control-menu-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [ControlMenuBarComponent, ControlMenuBarButtonDirective],
  exports: [ControlMenuBarComponent, ControlMenuBarButtonDirective],
})
export class ControlMenuBarModule {}
