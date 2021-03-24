import { Component } from '@angular/core';
import { NumericFieldComponent } from './../numeric-field.component';

@Component({
  selector: 'silo-number-box',
  templateUrl: './number-box.component.html',
  styleUrls: ['./number-box.component.scss'],
})
export class NumberBoxComponent extends NumericFieldComponent {}
