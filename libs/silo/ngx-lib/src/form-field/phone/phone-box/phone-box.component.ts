import { Component } from '@angular/core';
import { SiloPhoneFieldComponent } from '../phone-field.component';

@Component({
  selector: 'silo-phone-box',
  templateUrl: './phone-box.component.html',
  styleUrls: ['./phone-box.component.scss'],
})
export class SiloPhoneBoxComponent extends SiloPhoneFieldComponent {}
