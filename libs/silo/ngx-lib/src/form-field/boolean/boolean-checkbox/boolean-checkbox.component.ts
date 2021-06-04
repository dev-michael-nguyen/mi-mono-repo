import { Component } from '@angular/core';
import { BooleanFieldComponent } from '../boolean-field.component';

@Component({
  selector: 'silo-boolean-checkbox',
  templateUrl: './boolean-checkbox.component.html',
  styleUrls: ['./boolean-checkbox.component.scss'],
})
export class BooleanCheckboxComponent extends BooleanFieldComponent {}
