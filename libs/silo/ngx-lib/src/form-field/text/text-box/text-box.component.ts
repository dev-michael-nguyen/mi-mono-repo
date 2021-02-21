import { Component } from '@angular/core';
import { TextFieldComponent } from './../text-field.component';

@Component({
  selector: 'silo-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class TextBoxComponent extends TextFieldComponent {}
