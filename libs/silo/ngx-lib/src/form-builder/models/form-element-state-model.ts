import { ComponentRef } from '@angular/core';
import { instanceOfGetFormValue } from './get-form-value';
import { instanceOfHasFormGroup } from './has-form-group';

/**
 * The state model for a form element.
 */
export class FormElementStateModel {
  private _elementComponentRef: ComponentRef<unknown>;

  isActive = false;

  set elementComponentRef(elementComponentRef: ComponentRef<unknown>) {
    this._elementComponentRef = elementComponentRef;
  }
  get elementComponentRef() {
    return this._elementComponentRef;
  }

  get formGroupInstance() {
    return instanceOfHasFormGroup(this._elementComponentRef?.instance)
      ? this._elementComponentRef?.instance.formGroup
      : undefined;
  }

  get formValueInstance() {
    return instanceOfGetFormValue(this._elementComponentRef?.instance)
      ? this._elementComponentRef?.instance?.getFormValue()
      : undefined;
  }
}
