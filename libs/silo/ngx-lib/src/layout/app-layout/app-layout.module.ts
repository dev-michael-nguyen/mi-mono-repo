import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StickyLayoutModule } from '../sticky-layout/sticky-layout.public-api';
import { SiloAppLayoutComponent } from './app-layout.component';

@NgModule({
  imports: [CommonModule, StickyLayoutModule],
  declarations: [SiloAppLayoutComponent],
  exports: [SiloAppLayoutComponent],
})
export class SiloAppLayoutModule {}
