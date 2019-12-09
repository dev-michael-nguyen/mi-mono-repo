import { Input } from '@angular/core';

export class InputComponent {
  @Input() responseId: string;
  @Input() property: string;

  model: any;
  metadata: any;
}