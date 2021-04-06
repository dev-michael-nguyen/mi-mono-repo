import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[siloStickyLayout]',
})
export class StickyLayoutDirective implements OnInit {
  @HostBinding('class.silo-sticky-layout')
  class = true;

  constructor(public elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.elementRef.nativeElement.className;
    this.elementRef.nativeElement.style.boxSizing = 'border-box';
    this.elementRef.nativeElement.style.display = 'flex';
    this.elementRef.nativeElement.style.flexDirection = 'column';
    this.elementRef.nativeElement.style.height = '100%';
  }
}
