import { Component, Input } from '@angular/core';

@Component({
  selector: 'silo-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent {
  @Input()
  labelId = '';

  @Input()
  label = '';
}
