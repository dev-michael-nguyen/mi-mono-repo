import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidatorErrorMap } from '../models/validator-error-map';
import { BooleanFieldComponent } from './boolean-field.component';

export class BooleanValidatorFactory {
  static createValidators(booleanFieldComponent: BooleanFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (booleanFieldComponent.isRequired) {
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
