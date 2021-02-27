import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
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

  @ViewChildren(MatRadioButton)
  matRadioButtons: QueryList<MatRadioButton>;

  ngOnInit() {
    super.ngOnInit();

    if (!this.isStacked) {
      this.fieldSize = 'col-6';
      this.outlineSize = 'col-12';
    }
  }
}
