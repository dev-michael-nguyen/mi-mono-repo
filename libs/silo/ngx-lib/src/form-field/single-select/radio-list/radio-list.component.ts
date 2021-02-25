import { Component, Input, OnInit } from '@angular/core';
import { SiloSingleSelectFieldComponent } from './../single-select-field.component';

@Component({
  selector: 'silo-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss'],
})
export class SiloRadioListComponent
  extends SiloSingleSelectFieldComponent
  implements OnInit {
  @Input()
  isStacked = true;

  ngOnInit() {
    super.ngOnInit();

    if (!this.isStacked) {
      this.fieldSize = 'col-6';
      this.outlineSize = 'col-12';
    }
  }
}
