import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorError } from '../common/validator-error.model';

export class SingleSelectValidator {
  createRequiredValidator(message = 'This field is required.'): ValidatorFn {
    return (control: AbstractControl): IValidatorError | null => {
      return control.value && control.value.key
        ? null
        : { isRequired: { message } };
    };
  }
}
