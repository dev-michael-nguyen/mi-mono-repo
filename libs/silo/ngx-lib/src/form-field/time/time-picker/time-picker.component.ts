import { Component } from '@angular/core';
import { SiloTimeFieldComponent } from '../time-field.component';

@Component({
  selector: 'silo-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class SiloTimePickerComponent extends SiloTimeFieldComponent {}
