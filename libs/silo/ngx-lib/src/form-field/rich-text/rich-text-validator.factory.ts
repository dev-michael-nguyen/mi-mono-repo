import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidatorErrorMap } from '../models/validator-error-map';
import { RichTextFieldComponent } from './rich-text-field.component';

export class RichTextValidatorFactory {
  static createValidators(richTextField: RichTextFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (richTextField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    if (richTextField.minLength) {
      validators.push(this.createMinLengthValidator(richTextField.minLength));
    }

    if (richTextField.maxLength) {
      validators.push(this.createMaxLengthValidator(richTextField.maxLength));
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): ValidatorErrorMap | null => {
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
    return (control: AbstractControl): ValidatorErrorMap | null => {
      const value = control.value ?? '';

      if (typeof value !== 'string') {
        return null;
      }

      return value.trim().length < minLength
        ? { minLength: { message } }
        : null;
    };
  }

  static createMaxLengthValidator(
    maxLength: number,
    message = `Cannot have more than ${maxLength} characters`,
  ): ValidatorFn {
    return (control: AbstractControl): ValidatorErrorMap | null => {
      const value = control.value ?? '';

      if (typeof value !== 'string') {
        return null;
      }

      return value.trim().length > maxLength
        ? { maxLength: { message } }
        : null;
    };
  }
}
