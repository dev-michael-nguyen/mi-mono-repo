import {
  AfterViewInit,
  Component,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { ClassExpression } from '../../../responsive/responsive-container/models/class-expression';
import { MultiSelectFieldComponent } from '../multi-select-field.component';

@Component({
  selector: 'silo-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss'],
})
export class CheckboxListComponent
  extends MultiSelectFieldComponent
  implements AfterViewInit {
  @ViewChildren(MatListOption)
  matListOptions: QueryList<MatListOption>;

  @Input()
  fieldSize: ClassExpression = 'col-6';

  ngAfterViewInit() {
    this.setSelectionListAsReadOnly();
  }

  setSelectionListAsReadOnly() {
    if (!this.isReadOnly) {
      return;
    }

    // TODO: This will work for now until we need to dynamically change from read-only to editable
    this.matListOptions.forEach((x) => {
      x.toggle = () => {
        // do nothing
      };
    });

    this._elementRef.nativeElement
      .querySelectorAll('.mat-list-option')
      .forEach((item) => {
        if (item.attributes.getNamedItem('aria-disabled').nodeValue == 'true') {
          item.removeAttribute('tabindex');
        }
      });
  }
}
