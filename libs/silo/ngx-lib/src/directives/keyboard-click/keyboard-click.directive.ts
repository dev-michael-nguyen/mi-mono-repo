import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[siloKeyboardClick]',
})
export class KeyboardClickDirective implements OnInit {
  @Input('siloKeyboardClick')
  code: string;

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.code = this.code || 'Space';
    this._elementRef.nativeElement.onkeypress = (
      keyboardEvent: KeyboardEvent,
    ) => {
      if (keyboardEvent.code == this.code) {
        this._elementRef.nativeElement.click();
      }
    };
  }
}
