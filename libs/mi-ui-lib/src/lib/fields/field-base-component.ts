import { Input } from '@angular/core';

export class FieldBaseComponent {
  @Input() responseId: string;
  @Input() property: string;

  model: any;
  metadata: any;
}