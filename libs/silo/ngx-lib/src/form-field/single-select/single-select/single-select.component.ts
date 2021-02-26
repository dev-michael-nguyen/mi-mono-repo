import { Component, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { SiloSingleSelectFieldComponent } from './../single-select-field.component';

@Component({
  selector: 'silo-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss'],
})
export class SiloSingleSelectComponent extends SiloSingleSelectFieldComponent {
  @ViewChild(MatSelect, { static: true })
  matSelect: MatSelect;

  ngOnInit() {
    super.ngOnInit();

    // TODO: This will work for now until we need to dynamically change from read-only to editable
    if (this.isReadOnly) {
      this.matSelect.open = () => {};
    }
  }
}
