import { Component, Input } from '@angular/core';
import { ClassExpression } from '../../../responsive/responsive-container/responsive-container.model';
import { TextFieldComponent } from './../text-field.component';

@Component({
  selector: 'silo-custom-mat-text-area',
  templateUrl: './custom-mat-text-area.component.html',
  styleUrls: ['./custom-mat-text-area.component.scss'],
})
export class CustomMatTextAreaComponent extends TextFieldComponent {
  @Input()
  fieldSize: ClassExpression = 'col-6';
}
