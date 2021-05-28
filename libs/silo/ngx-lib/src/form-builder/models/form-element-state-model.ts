import { ComponentRef } from '@angular/core';

/**
 * The state model for a form element.
 */
export class FormElementStateModel {
  isActive = false;
  elementComponentRef: ComponentRef<unknown>;
}
