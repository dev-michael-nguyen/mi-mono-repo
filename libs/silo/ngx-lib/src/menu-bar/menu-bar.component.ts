import {
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AutoFocusDirective } from '../directives/auto-focus/auto-focus.directive';
import { MenuBarButtonDirective } from './menu-bar-button.directive';

@Component({
  selector: 'silo-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  isActive$ = new BehaviorSubject<boolean>(false);

  @ContentChildren(MenuBarButtonDirective)
  menuBarButtons: QueryList<MenuBarButtonDirective>;

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.ctrlKey) {
        this.isActive$.next(true);
        AutoFocusDirective.focusFirstFocusable(this._elementRef);
      }
    });

    this.isActive$.subscribe((isActive) => {
      if (this.menuBarButtons) {
        this.menuBarButtons.forEach((item) => item.setIsActive(isActive));
      }
    });
  }
}
