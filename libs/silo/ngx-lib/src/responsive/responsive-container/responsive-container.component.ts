import { Component, Input, OnInit } from '@angular/core';
import { ColSize } from './responsive-container.model';

@Component({
  selector: 'silo-responsive-container',
  templateUrl: './responsive-container.component.html',
  styleUrls: ['./responsive-container.component.scss']
})
export class ResponsiveContainerComponent implements OnInit {

  @Input()
  colSize: ColSize;

  constructor() { }

  ngOnInit() {
  }

}
