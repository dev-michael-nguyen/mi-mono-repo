import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorError } from '../common/validator-error.model';

export class SiloMultiSelectValidatorFactory {
  createRequiredValidator(message = 'This field is required.'): ValidatorFn {
    return (control: AbstractControl): IValidatorError | null => {
      return control.value && control.value.length
        ? null
        : { isRequired: { message } };
    };
  }
}
