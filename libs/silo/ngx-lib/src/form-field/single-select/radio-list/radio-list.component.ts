import { Component, Input } from '@angular/core';
import { ClassExpression } from '../../../responsive/responsive-container/models/class-expression';
import { SingleSelectFieldComponent } from './../single-select-field.component';

@Component({
  selector: 'silo-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss'],
})
export class RadioListComponent extends SingleSelectFieldComponent {
  @Input()
  fieldSize: ClassExpression = 'col-6';

  @Input()
  isStacked = true;
}
