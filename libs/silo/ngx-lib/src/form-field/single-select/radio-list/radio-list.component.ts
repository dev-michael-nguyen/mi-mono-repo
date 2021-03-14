import { Component, Input } from '@angular/core';
import { ClassExpression } from '../../../responsive/responsive-container/responsive-container.model';
import { SiloSingleSelectFieldComponent } from './../single-select-field.component';

@Component({
  selector: 'silo-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss'],
})
export class SiloRadioListComponent extends SiloSingleSelectFieldComponent {
  @Input()
  fieldSize: ClassExpression = 'col-6';

  @Input()
  isStacked = true;
}
