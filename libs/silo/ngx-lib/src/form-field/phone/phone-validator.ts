import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorErrorMap } from '../common/validator-error.model';

export class PhoneValidator {
  createRequiredValidator(message = 'This field is required.'): ValidatorFn {
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