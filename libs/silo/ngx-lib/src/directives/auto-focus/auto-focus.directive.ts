import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

/**
 * @description
 * This directive will auto focus HTMLElement that it is on when element is first rendered.
 *
 * @usageNotes
 * ```html
 * <!-- auto focus first focusable child in this div -->
 * <div siloAutoFocus>...<div>
 *
 * <!-- auto focus this div since its focusable -->
 * <div siloAutoFocus tabindex=0>...</div>
 *
 * <!-- conditionally enable/disable this directive -->
 * <div [siloAutoFocus]="isEnable">...</div>
 *
 * <!-- auto focus first element with id or class "header" -->
 * <div siloAutoFocus focusChildSelectors=".header, #header">...</div>
 * ```
 */
@Directive({
  selector: '[siloAutoFocus]',
})
export class AutoFocusDirective implements AfterViewInit {
  private readonly DEFAULT_SELECTORS =
    '[tabindex]:not([tabindex="-1"]), button';

  /**
   * Reference to last focus element.
   */
  lastFocusElement: HTMLElement;

  /**
   * Indicate whether this directive is enable.
   * Note: If nothing is bind, this will be empty string which will be treated as enable anyway.
   */
  @Input('siloAutoFocus')
  isEnable = true;

  /**
   * First child that match the specified group of selectors will be focus.
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll}
   */
  @Input()
  focusChildSelectors: string;

  constructor(private _el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.focusFirstFocusable(
      this.focusChildSelectors || this.DEFAULT_SELECTORS,
    );
  }

  /**
   * Focus first child element that match the specified group of selectors.
   */
  focusFirstFocusable(selectors: string) {
    if (this.isEnable === false) {
      return;
    }

    // self focus
    if (this._el.nativeElement.tabIndex === 0 && !this.focusChildSelectors) {
      this._el.nativeElement.focus();
      this.lastFocusElement = this._el.nativeElement;
      return;
    }

    const focusable = this._el.nativeElement.querySelectorAll(selectors);
    if (focusable.length) {
      const firstFocusable = focusable[0] as HTMLElement;
      firstFocusable.focus();
      this.lastFocusElement = firstFocusable;
      return;
    }
  }
}
