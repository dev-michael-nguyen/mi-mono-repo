import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ClassExpression } from './models/class-expression';

@Directive({
  selector: '[siloResponsiveContainer]',
})
export class ResponsiveContainerDirective implements OnInit {
  static readonly RESPONSIVE_CONTAINER_CLASS = 'silo-responsive-container';

  @Input('siloResponsiveContainer')
  classExpression: ClassExpression;

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.addClassExpression(this.classExpression);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.classExpression && !changes.classExpression.isFirstChange()) {
      this.removeClassExpression(changes.classExpression.previousValue);
      this.addClassExpression(changes.classExpression.currentValue);
    }
  }

  addClassExpression(classExpression: ClassExpression) {
    if (!classExpression) {
      return;
    }

    this._elementRef.nativeElement.classList.add(
      ResponsiveContainerDirective.RESPONSIVE_CONTAINER_CLASS,
    );

    if (Array.isArray(classExpression)) {
      this._elementRef.nativeElement.classList.add(...classExpression);
      return;
    }

    if (typeof classExpression === 'string') {
      this._elementRef.nativeElement.classList.add(classExpression as string);
      return;
    }

    if (typeof classExpression === 'object') {
      Object.keys(classExpression).forEach((key) => {
        if (
          classExpression[key] &&
          !this._elementRef.nativeElement.classList.contains(key)
        ) {
          this._elementRef.nativeElement.classList.add(key);
        }
      });
      return;
    }
  }

  removeClassExpression(classExpression: ClassExpression) {
    if (!classExpression) {
      return;
    }

    if (Array.isArray(classExpression)) {
      this._elementRef.nativeElement.classList.remove(...classExpression);
      return;
    }

    if (typeof classExpression === 'string') {
      this._elementRef.nativeElement.classList.remove(
        classExpression as string,
      );
      return;
    }

    if (typeof classExpression === 'object') {
      Object.keys(classExpression).forEach((key) => {
        if (this._elementRef.nativeElement.classList.contains(key)) {
          this._elementRef.nativeElement.classList.remove(key);
        }
      });
      return;
    }
  }
}
