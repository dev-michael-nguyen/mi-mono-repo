import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[siloMenuBarButton]',
})
export class MenuBarButtonDirective implements OnInit {
  @Input('siloMenuBarButton')
  char: string;

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {}

  setIsActive(value: boolean) {
    if (value) {
      console.log(this._elementRef.nativeElement);
    }
  }
}
