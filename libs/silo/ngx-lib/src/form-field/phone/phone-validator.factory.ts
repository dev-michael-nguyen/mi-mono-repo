import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidatorErrorMap } from '../models/validator-error-map';
import { PhoneFieldComponent } from './phone-field.component';

export class PhoneValidatorFactory {
  static createValidators(phoneField: PhoneFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (phoneField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    validators.push(this.createPhoneFormatValidator());

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): ValidatorErrorMap | null => {
      const value = control.value ?? '';

      const isWhitespace = value.trim().length === 0;

      return isWhitespace ? { isRequired: { message } } : null;
    };
  }

  static createPhoneFormatValidator(
    message = 'Format should be XXX-XXX-XXXX',
  ): ValidatorFn {
    return (control: AbstractControl): ValidatorErrorMap | null => {
      const value = control.value ?? '';

      const phoneRegex = new RegExp('\\d{3}-\\d{3}-\\d{4}$');

      return phoneRegex.test(value) ? null : { format: { message } };
    };
  }
}
