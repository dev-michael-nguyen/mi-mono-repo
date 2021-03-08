import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorErrorMap } from '../common/validator-error.model';
import { SiloPhoneFieldComponent } from './phone.public-api';

export class SiloPhoneValidatorFactory {
  static createValidators(phoneField: SiloPhoneFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (phoneField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): IValidatorErrorMap | null => {
      const value =
        control.value === null || control.value === undefined
          ? ''
          : control.value;

      if (typeof value !== 'string') {
        return null;
      }

      const isWhitespace = value.trim().length === 0;

      return !isWhitespace ? null : { isRequired: { message } };
    };
  }
}
