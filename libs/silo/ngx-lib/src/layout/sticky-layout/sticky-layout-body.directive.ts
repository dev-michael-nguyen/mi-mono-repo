import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[siloStickyLayoutBody]',
})
export class StickyLayoutBodyDirective {
  constructor(public el: ElementRef<HTMLElement>) {
    this.el.nativeElement.style.boxSizing = 'border-box';
    this.el.nativeElement.style.height = '100%';
    this.el.nativeElement.style.overflowY = 'auto';
  }
}
