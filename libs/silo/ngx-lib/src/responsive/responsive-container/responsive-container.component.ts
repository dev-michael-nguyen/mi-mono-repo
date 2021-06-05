import { Component, Input } from '@angular/core';
import { ClassExpression } from './models/class-expression';

@Component({
  selector: 'silo-responsive-container',
  templateUrl: './responsive-container.component.html',
})
export class ResponsiveContainerComponent {
  @Input()
  classExpression: ClassExpression;
}
