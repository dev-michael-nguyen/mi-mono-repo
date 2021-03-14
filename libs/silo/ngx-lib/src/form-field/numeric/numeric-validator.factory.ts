import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorErrorMap } from '../common/validator-error.model';
import { SiloNumericFieldComponent } from './numeric-field.component';

export class SiloNumericValidatorFactory {
  static createValidators(numericField: SiloNumericFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (numericField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): IValidatorErrorMap | null => {
      const value = control.value ?? '';

      return value ? null : { isRequired: { message } };
    };
  }
}
