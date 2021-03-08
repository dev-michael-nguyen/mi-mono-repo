import { LookupModel } from './../common/lookup.model';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { IValidatorErrorMap } from '../common/validator-error.model';
import { SiloSingleSelectFieldComponent } from './single-select-field.component';

export class SingleSelectValidatorFactory {
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
      const value = control.value as LookupModel;
      return value && value.key && value.key.trim().length
        ? null
        : { isRequired: { message } };
    };
  }
}
