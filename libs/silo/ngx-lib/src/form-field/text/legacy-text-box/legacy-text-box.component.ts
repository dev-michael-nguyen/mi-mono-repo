import { Component } from '@angular/core';
import { TextFieldComponent } from './../text-field.component';

@Component({
  selector: 'silo-legacy-text-box',
  templateUrl: './legacy-text-box.component.html',
  styleUrls: ['./legacy-text-box.component.scss'],
})
export class LegacyTextBoxComponent extends TextFieldComponent {}
