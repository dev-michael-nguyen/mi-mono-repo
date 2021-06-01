import { ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { instanceOfGetFormValue } from './get-form-value';

/**
 * The state model for a form element.
 */
export class FormElementStateModel {
  private _elementComponentRef: ComponentRef<unknown>;

  isActive = false;

  formGroup = new FormGroup({});

  set elementComponentRef(elementComponentRef: ComponentRef<unknown>) {
    this._elementComponentRef = elementComponentRef;
  }

  get elementComponentRef() {
    return this._elementComponentRef;
  }

  get instanceOfGetFormValue() {
    return instanceOfGetFormValue(this._elementComponentRef?.instance);
  }

  get formValueInstance() {
    return instanceOfGetFormValue(this._elementComponentRef?.instance)
      ? this._elementComponentRef?.instance?.getFormValue()
      : undefined;
  }
}
