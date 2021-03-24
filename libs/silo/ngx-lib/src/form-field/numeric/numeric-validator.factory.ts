import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidatorErrorMap } from '../models/validator-error-map';
import { NumericFieldComponent } from './numeric-field.component';

export class NumericValidatorFactory {
  static createValidators(numericField: NumericFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (numericField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): ValidatorErrorMap | null => {
      const value = control.value ?? '';

      return value ? null : { isRequired: { message } };
    };
  }
}
