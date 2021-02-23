import { Component } from '@angular/core';
import { SiloTextFieldComponent } from './../text-field.component';

@Component({
  selector: 'silo-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class SiloTextBoxComponent extends SiloTextFieldComponent {}
