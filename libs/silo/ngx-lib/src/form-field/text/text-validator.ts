import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorErrorMap } from '../common/validator-error.model';
import { SiloTextFieldComponent } from './text-field.component';

export class SiloTextValidatorFactory {
  static createValidators(textField: SiloTextFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (textField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    if (textField.minLength) {
      validators.push(this.createMinLengthValidator(textField.minLength));
    }

    if (textField.maxLength) {
      validators.push(this.createMaxLengthValidator(textField.maxLength));
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): IValidatorErrorMap | null => {
      const value = control.value ?? '';

      if (typeof value !== 'string') {
        return null;
      }

      const isWhitespace = value.trim().length === 0;

      return isWhitespace ? { isRequired: { message } } : null;
    };
  }

  static createMinLengthValidator(
    minLength: number,
    message = `Cannot have less than ${minLength} characters`,
  ): ValidatorFn {
    return (control: AbstractControl): IValidatorErrorMap | null => {
      const value = control.value ?? '';

      if (typeof value !== 'string') {
        return null;
      }

      return value.length < minLength ? { minLength: { message } } : null;
    };
  }

  static createMaxLengthValidator(
    maxLength: number,
    message = `Cannot have more than ${maxLength} characters`,
  ): ValidatorFn {
    return (control: AbstractControl): IValidatorErrorMap | null => {
      const value = control.value ?? '';

      if (typeof value !== 'string') {
        return null;
      }

      return value.length > maxLength ? { maxLength: { message } } : null;
    };
  }
}
