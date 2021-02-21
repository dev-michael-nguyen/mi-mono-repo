import { Component } from '@angular/core';
import { TextFieldComponent } from './../text-field.component';

@Component({
  selector: 'silo-custom-mat-text-box',
  templateUrl: './custom-mat-text-box.component.html',
  styleUrls: ['./custom-mat-text-box.component.scss'],
})
export class CustomMatTextBoxComponent extends TextFieldComponent {}
