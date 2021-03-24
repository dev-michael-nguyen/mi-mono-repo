import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidatorErrorMap } from '../models/validator-error-map';
import { DateFieldComponent } from './date-field.component';

export class DateValidatorFactory {
  static createValidators(dateField: DateFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (dateField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): ValidatorErrorMap | null => {
      return control.value ? null : { isRequired: { message } };
    };
  }
}
