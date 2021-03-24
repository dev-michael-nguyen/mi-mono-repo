import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StickyLayoutModule } from '../sticky-layout/sticky-layout.public-api';
import { AppLayoutComponent } from './app-layout.component';

@NgModule({
  imports: [CommonModule, StickyLayoutModule],
  declarations: [AppLayoutComponent],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
