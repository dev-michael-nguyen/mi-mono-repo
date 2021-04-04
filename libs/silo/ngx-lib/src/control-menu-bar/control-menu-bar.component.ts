import {
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AutoFocusDirective } from '../directives/auto-focus/auto-focus.directive';
import { ControlMenuBarButtonDirective } from './control-menu-bar-button.directive';

@Component({
  selector: 'silo-control-menu-bar',
  templateUrl: './control-menu-bar.component.html',
  styleUrls: ['./control-menu-bar.component.scss'],
})
export class ControlMenuBarComponent implements OnInit {
  isActive$ = new BehaviorSubject<boolean>(false);

  @ContentChildren(ControlMenuBarButtonDirective)
  controlMenuBarButtons: QueryList<ControlMenuBarButtonDirective>;

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.ctrlKey) {
        this.isActive$.next(true);
        AutoFocusDirective.focusFirstFocusable(this._elementRef);
        return;
      }

      const foundButton = this.controlMenuBarButtons.find(
        (x) => x.char.toLowerCase() === event.key.toLowerCase(),
      );
      if (foundButton) {
        foundButton.click();
      }
    });
  }
}
