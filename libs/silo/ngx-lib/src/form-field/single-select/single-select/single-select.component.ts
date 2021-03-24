import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { SingleSelectFieldComponent } from './../single-select-field.component';

@Component({
  selector: 'silo-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss'],
})
export class SingleSelectComponent
  extends SingleSelectFieldComponent
  implements AfterViewInit {
  @ViewChild(MatSelect, { static: true })
  matSelect: MatSelect;

  ngAfterViewInit() {
    this.setSelectAsReadOnly();
  }

  setSelectAsReadOnly() {
    if (!this.isReadOnly) {
      return;
    }

    // TODO: This will work for now until we need to dynamically change from read-only to editable
    this.matSelect.open = () => {
      // do nothing
    };
  }
}
