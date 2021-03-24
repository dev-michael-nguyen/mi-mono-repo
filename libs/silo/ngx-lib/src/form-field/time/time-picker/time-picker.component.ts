import { Component } from '@angular/core';
import { TimeFieldComponent } from '../time-field.component';

@Component({
  selector: 'silo-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent extends TimeFieldComponent {}
