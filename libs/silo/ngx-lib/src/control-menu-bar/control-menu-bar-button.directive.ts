import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[siloControlMenuBarButton]',
})
export class ControlMenuBarButtonDirective implements OnInit {
  private _originalHtml: string;
  private _highlightHtml: string;

  @Input('siloControlMenuBarButton')
  eventKey: string;

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.setHtml();
    this.addHighlight();
  }

  setHtml() {
    this._originalHtml = this._elementRef.nativeElement.innerHTML;
    const originalLabel = this._elementRef.nativeElement.innerText;
    const newLabel = originalLabel
      .replace(originalLabel, `<span>${originalLabel}</span>`)
      .replace(
        this.eventKey,
        `<u class="silo-control-menu-bar-button__key">${this.eventKey}</u>`,
      );
    this._highlightHtml = this._elementRef.nativeElement.innerHTML.replace(
      originalLabel,
      newLabel,
    );
  }

  addHighlight() {
    this._elementRef.nativeElement.innerHTML = this._highlightHtml;
  }

  removeHighLight() {
    this._elementRef.nativeElement.innerHTML = this._originalHtml;
  }

  click() {
    this._elementRef.nativeElement.click();
  }
}
