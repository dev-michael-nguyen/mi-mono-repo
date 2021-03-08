import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorErrorMap } from '../common/validator-error.model';
import { SiloMultiSelectFieldComponent } from './multi-select.public-api';

export class SiloMultiSelectValidatorFactory {
  static createValidators(multiSelectField: SiloMultiSelectFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (multiSelectField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): IValidatorErrorMap | null => {
      return control.value && control.value.length
        ? null
        : { isRequired: { message } };
    };
  }
}
