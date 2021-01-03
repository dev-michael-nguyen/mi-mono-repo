import { NgModule } from '@angular/core';
import { StickyLayoutBodyDirective } from './sticky-layout-body.directive';
import { StickyLayoutDirective } from './sticky-layout.directive';

@NgModule({
  declarations: [
    StickyLayoutDirective,
    StickyLayoutBodyDirective
  ],
  exports: [
    StickyLayoutDirective,
    StickyLayoutBodyDirective
  ]
})
export class StickyLayoutModule { }
