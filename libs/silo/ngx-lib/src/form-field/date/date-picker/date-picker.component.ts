import { Component } from '@angular/core';
import { SiloDateFieldComponent } from './../date-field.component';

@Component({
  selector: 'silo-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class SiloDatePickerComponent extends SiloDateFieldComponent {}
