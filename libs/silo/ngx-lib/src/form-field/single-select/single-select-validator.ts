import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorErrorMap } from '../common/validator-error.model';

export class SingleSelectValidator {
  createRequiredValidator(message = 'This field is required.'): ValidatorFn {
    return (control: AbstractControl): IValidatorErrorMap | null => {
      return control.value && control.value.key
        ? null
        : { isRequired: { message } };
    };
  }
}
