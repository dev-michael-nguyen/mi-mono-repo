import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveContainerComponent } from './responsive-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResponsiveContainerComponent],
  exports: [ResponsiveContainerComponent],
})
export class ResponsiveContainerModule { }
