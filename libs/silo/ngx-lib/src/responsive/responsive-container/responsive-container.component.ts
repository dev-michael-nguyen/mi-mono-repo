import { Component, Input, OnInit } from '@angular/core';
import { ClassExpression } from './responsive-container.model';

@Component({
  selector: 'silo-responsive-container',
  templateUrl: './responsive-container.component.html',
})
export class SiloResponsiveContainerComponent implements OnInit {
  @Input()
  colExpression: ClassExpression;

  constructor() {}

  ngOnInit() {}
}
