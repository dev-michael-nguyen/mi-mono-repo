import { AbstractControl, ValidatorFn } from '@angular/forms';

export interface ITextValidatorError {
  [key: string]: {
    message: string;
  };
}

export class TextValidator {

  createRequiredValidator(message = 'This field is required.'): ValidatorFn {
    return (control: AbstractControl): ITextValidatorError | null => {
      const value = control.value === null || control.value === undefined
        ? ''
        : control.value;

      if (typeof value !== 'string') { return null; }

      const isWhitespace = value.trim().length === 0;

      return !isWhitespace
        ? null
        : { isRequired: { message } };
    };
  }

}