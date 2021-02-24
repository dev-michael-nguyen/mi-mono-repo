import { AbstractControl, ValidatorFn } from '@angular/forms';

export interface ISingleSelectValidatorError {
  [key: string]: {
    message: string;
  };
}

export class SingleSelectValidator {
  createRequiredValidator(message = 'This field is required.'): ValidatorFn {
    return (control: AbstractControl): ISingleSelectValidatorError | null => {
      return control.value && control.value.key
        ? null
        : { isRequired: { message } };
    };
  }
}
