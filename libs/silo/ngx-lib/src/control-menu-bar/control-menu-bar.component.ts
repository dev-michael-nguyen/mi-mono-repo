import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ContentChildren,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AutoFocusDirective } from '../directives/auto-focus/auto-focus.directive';
import { ControlMenuBarButtonDirective } from './control-menu-bar-button.directive';

@Component({
  selector: 'silo-control-menu-bar',
  templateUrl: './control-menu-bar.component.html',
  styleUrls: ['./control-menu-bar.component.scss'],
  animations: [
    trigger('render', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ControlMenuBarComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject();

  @ContentChildren(ControlMenuBarButtonDirective)
  controlMenuBarButtons: QueryList<ControlMenuBarButtonDirective>;

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    // if control key is pressed anywhere, focus first focusable element
    fromEvent(document, 'keydown')
      .pipe(takeUntil(this._destroy$))
      .subscribe((event: KeyboardEvent) => {
        if (event.ctrlKey) {
          AutoFocusDirective.focusFirstFocusable(this._elementRef);
          return;
        }
      });

    // if bound key is pressed when menu is focus, click button that match with bound key
    fromEvent(this._elementRef.nativeElement, 'keydown')
      .pipe(takeUntil(this._destroy$))
      .subscribe((event: KeyboardEvent) => {
        const foundButton = this.controlMenuBarButtons.find(
          (x) => x.char.toLowerCase() === event.key.toLowerCase(),
        );
        if (foundButton) {
          foundButton.click();
        }
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
