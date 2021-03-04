import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorErrorMap } from '../common/validator-error.model';

export class SiloMultiSelectValidatorFactory {
  createRequiredValidator(message = 'This field is required.'): ValidatorFn {
    return (control: AbstractControl): IValidatorErrorMap | null => {
      return control.value && control.value.length
        ? null
        : { isRequired: { message } };
    };
  }
}
