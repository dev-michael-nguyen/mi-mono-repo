import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidatorErrorMap } from '../models/validator-error-map';
import { TimeFieldComponent } from './time-field.component';

export class TimeValidatorFactory {
  static createValidators(timeField: TimeFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (timeField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): ValidatorErrorMap | null => {
      return !control.value ? { isRequired: { message } } : null;
    };
  }
}
