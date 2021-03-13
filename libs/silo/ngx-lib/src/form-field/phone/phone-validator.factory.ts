import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorErrorMap } from '../common/validator-error.model';
import { SiloPhoneFieldComponent } from './phone.public-api';

export class SiloPhoneValidatorFactory {
  static createValidators(phoneField: SiloPhoneFieldComponent) {
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
    return (control: AbstractControl): IValidatorErrorMap | null => {
      const value = control.value ?? '';

      const isWhitespace = value.trim().length === 0;

      return isWhitespace ? { isRequired: { message } } : null;
    };
  }

  static createPhoneFormatValidator(
    message = 'Format should be XXX-XXX-XXXX',
  ): ValidatorFn {
    return (control: AbstractControl): IValidatorErrorMap | null => {
      const value = control.value ?? '';

      const phoneRegex = new RegExp('\\d{3}-\\d{3}-\\d{4}$');

      return phoneRegex.test(value) ? null : { format: { message } };
    };
  }
}
