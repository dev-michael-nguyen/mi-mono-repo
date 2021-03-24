import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidatorErrorMap } from '../models/validator-error-map';
import { MultiSelectFieldComponent } from './multi-select-field.component';

export class MultiSelectValidatorFactory {
  static createValidators(multiSelectField: MultiSelectFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (multiSelectField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): ValidatorErrorMap | null => {
      return control.value && control.value.length
        ? null
        : { isRequired: { message } };
    };
  }
}
