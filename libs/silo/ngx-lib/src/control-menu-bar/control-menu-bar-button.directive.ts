import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[siloControlMenuBarButton]',
})
export class ControlMenuBarButtonDirective {
  @Input('siloControlMenuBarButton')
  char: string;

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  click() {
    this._elementRef.nativeElement.click();
  }
}
