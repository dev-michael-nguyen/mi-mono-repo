import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'silo-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class SiloLabelComponent implements OnInit {
  @Input()
  labelId: string;

  @Input()
  label: string;

  constructor() {}

  ngOnInit() {}
}
