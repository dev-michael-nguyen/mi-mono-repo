import { Component, Input } from '@angular/core';
import { ClassExpression } from '../../../responsive/responsive-container/responsive-container.model';
import { SiloTextFieldComponent } from './../text-field.component';

@Component({
  selector: 'silo-legacy-text-area',
  templateUrl: './legacy-text-area.component.html',
  styleUrls: ['./legacy-text-area.component.scss'],
})
export class SiloLegacyTextAreaComponent extends SiloTextFieldComponent {
  @Input()
  fieldSize: ClassExpression = 'col-6';
}
