import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiloResponsiveContainerComponent } from './responsive-container.component';
import { SiloResponsiveContainerDirective } from './responsive-container.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SiloResponsiveContainerComponent,
    SiloResponsiveContainerDirective,
  ],
  exports: [SiloResponsiveContainerComponent, SiloResponsiveContainerDirective],
})
export class SiloResponsiveContainerModule {}
