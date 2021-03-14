import { Component } from '@angular/core';
import { SiloNumericFieldComponent } from './../numeric-field.component';

@Component({
  selector: 'silo-number-box',
  templateUrl: './number-box.component.html',
  styleUrls: ['./number-box.component.scss'],
})
export class SiloNumberBoxComponent extends SiloNumericFieldComponent {}
