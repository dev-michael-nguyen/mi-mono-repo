import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[siloStickyLayoutBody]',
})
export class StickyLayoutBodyDirective implements OnInit {
  @HostBinding('class.silo-sticky-layout__body')
  class = true;

  constructor(public elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.boxSizing = 'border-box';
    this.elementRef.nativeElement.style.height = '100%';
    this.elementRef.nativeElement.style.overflowY = 'auto';
  }
}
