import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorErrorMap } from '../common/validator-error.model';
import { SiloSingleSelectFieldComponent } from './single-select-field.component';

export class SingleSelectValidator {
  static createValidators(singleSelectField: SiloSingleSelectFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (singleSelectField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): IValidatorErrorMap | null => {
      return control.value && control.value.key
        ? null
        : { isRequired: { message } };
    };
  }
}
