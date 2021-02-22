import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveContainerComponent } from './responsive-container.component';
import { ResponsiveContainerDirective } from './responsive-container.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ResponsiveContainerComponent, ResponsiveContainerDirective],
  exports: [ResponsiveContainerComponent, ResponsiveContainerDirective],
})
export class ResponsiveContainerModule {}
