import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ClassExpression } from '../../../responsive/responsive-container/responsive-container.model';
import { SiloTextFieldComponent } from './../text-field.component';

@Component({
  selector: 'silo-rich-text-area',
  templateUrl: './rich-text-area.component.html',
  styleUrls: ['./rich-text-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SiloRichTextAreaComponent extends SiloTextFieldComponent {
  @Input()
  fieldSize: ClassExpression = 'col-6';
}
