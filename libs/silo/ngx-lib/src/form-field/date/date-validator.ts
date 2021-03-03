import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorError } from '../common/validator-error.model';

export class SiloDateValidator {
  createRequiredValidator(message = 'This field is required.'): ValidatorFn {
    return (control: AbstractControl): IValidatorError | null => {
      return control.value ? null : { isRequired: { message } };
    };
  }
}
