import { Component, Input } from '@angular/core';
import { ClassExpression } from './responsive-container.model';

@Component({
  selector: 'silo-responsive-container',
  templateUrl: './responsive-container.component.html',
})
export class SiloResponsiveContainerComponent {
  @Input()
  colExpression: ClassExpression;
}
