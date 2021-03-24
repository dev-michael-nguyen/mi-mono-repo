import { Component, Input } from '@angular/core';
import { ClassExpression } from '../../../responsive/responsive-container/models/class-expression';
import { TextFieldComponent } from './../text-field.component';

@Component({
  selector: 'silo-legacy-text-area',
  templateUrl: './legacy-text-area.component.html',
  styleUrls: ['./legacy-text-area.component.scss'],
})
export class LegacyTextAreaComponent extends TextFieldComponent {
  @Input()
  fieldSize: ClassExpression = 'col-6';
}
