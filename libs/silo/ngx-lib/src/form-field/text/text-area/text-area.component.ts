import { Component, Input } from '@angular/core';
import { ClassExpression } from '../../../responsive/responsive-container/models/class-expression';
import { TextFieldComponent } from './../text-field.component';

@Component({
  selector: 'silo-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent extends TextFieldComponent {
  @Input()
  fieldSize: ClassExpression = 'col-6';
}
