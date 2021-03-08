import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorErrorMap } from '../common/validator-error.model';
import { SiloTimeFieldComponent } from './time-field.component';

export class SiloTimeValidatorFactory {
  static createValidators(timeField: SiloTimeFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (timeField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): IValidatorErrorMap | null => {
      return !control.value ? { isRequired: { message } } : null;
    };
  }
}
