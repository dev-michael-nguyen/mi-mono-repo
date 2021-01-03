import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[miStickyLayoutBody]'
})
export class StickyLayoutBodyDirective {

  constructor(
    public el: ElementRef<HTMLElement>
  ) {
    this.el.nativeElement.style.height = '100%';
    this.el.nativeElement.style.overflowY = 'auto';
  }

}
