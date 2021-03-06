import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorErrorMap } from '../common/validator-error.model';
import { SiloDateFieldComponent } from './date.public-api';

export class SiloDateValidator {
  static createValidators(dateField: SiloDateFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (dateField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): IValidatorErrorMap | null => {
      return control.value ? null : { isRequired: { message } };
    };
  }
}
