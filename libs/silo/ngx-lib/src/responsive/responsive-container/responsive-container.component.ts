import { Component, Input, OnInit } from '@angular/core';
import { ClassExpression } from './responsive-container.model';

@Component({
  selector: 'silo-responsive-container',
  templateUrl: './responsive-container.component.html',
})
export class ResponsiveContainerComponent implements OnInit {
  @Input()
  colExpression: ClassExpression;

  constructor() {}

  ngOnInit() {}
}
