import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ClassExpression } from './models/class-expression';

@Directive({
  selector: '[siloResponsiveContainer]',
})
export class ResponsiveContainerDirective implements OnInit {
  static readonly REPONSIVE_CONTAINER_CLASS = 'silo-responsive-container';

  @Input('siloResponsiveContainer')
  colExpression: ClassExpression;

  constructor(private _el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.addColExpression(this.colExpression);
  }

  addColExpression(colExpression: ClassExpression) {
    if (!colExpression) {
      return;
    }

    this._el.nativeElement.classList.add(
      ResponsiveContainerDirective.REPONSIVE_CONTAINER_CLASS,
    );

    if (Array.isArray(colExpression)) {
      this._el.nativeElement.classList.add(...colExpression);
      return;
    }

    if (typeof colExpression === 'string') {
      this._el.nativeElement.classList.add(colExpression as string);
      return;
    }

    if (typeof colExpression === 'object') {
      Object.keys(colExpression).forEach((key) => {
        if (colExpression[key]) {
          this._el.nativeElement.classList.add(key);
        }
      });
      return;
    }
  }
}
