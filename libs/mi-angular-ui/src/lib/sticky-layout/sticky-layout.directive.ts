import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[miStickyLayout]'
})
export class StickyLayoutDirective {

  constructor(
    public el: ElementRef<HTMLElement>
  ) {
    this.el.nativeElement.style.boxSizing = 'border-box';
    this.el.nativeElement.style.display = 'flex';
    this.el.nativeElement.style.flexDirection = 'column';
    this.el.nativeElement.style.height = '100%';
  }

}
