import { ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { instanceOfGetFormValue } from './get-form-value';

/**
 * The state model for a form element.
 */
export class FormElementStateModel {
  elementComponentRef: ComponentRef<unknown>;

  isActive = false;

  formGroup = new FormGroup({});

  get instanceOfGetFormValue() {
    return instanceOfGetFormValue(this.elementComponentRef?.instance);
  }

  get formValueInstance() {
    return instanceOfGetFormValue(this.elementComponentRef?.instance)
      ? this.elementComponentRef?.instance?.getFormValue()
      : undefined;
  }
}
