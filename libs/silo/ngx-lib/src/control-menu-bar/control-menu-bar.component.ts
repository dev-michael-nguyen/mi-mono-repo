import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
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

  @Input()
  label: string;

  @Input()
  eventCode: string;

  @ContentChildren(ControlMenuBarButtonDirective)
  controlMenuBarButtons: QueryList<ControlMenuBarButtonDirective>;

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    fromEvent(document, 'keydown')
      .pipe(takeUntil(this._destroy$))
      .subscribe((event: KeyboardEvent) => {
        // if shift + event code key is pressed anywhere, focus first focusable element
        if (event.shiftKey && this.eventCode == event.code) {
          AutoFocusDirective.focusFirstFocusable(this._elementRef);
          return;
        }
      });

    fromEvent(this._elementRef.nativeElement, 'keydown')
      .pipe(takeUntil(this._destroy$))
      .subscribe((event: KeyboardEvent) => {
        // if bound key is pressed when menu is focus, click button that match with bound key
        const foundButton = this.controlMenuBarButtons.find(
          (x) => x.eventKey.toLowerCase() === event.key.toLowerCase(),
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
