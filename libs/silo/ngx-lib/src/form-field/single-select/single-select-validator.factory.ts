import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidatorErrorMap } from '../models/validator-error-map';
import { LookupModel } from './../models/lookup-model';
import { SingleSelectFieldComponent } from './single-select-field.component';

export class SingleSelectValidatorFactory {
  static createValidators(singleSelectField: SingleSelectFieldComponent) {
    const validators: Array<ValidatorFn> = [];

    if (singleSelectField.isRequired) {
      validators.push(this.createRequiredValidator());
    }

    return validators;
  }

  static createRequiredValidator(
    message = 'This field is required.',
  ): ValidatorFn {
    return (control: AbstractControl): ValidatorErrorMap | null => {
      const value = control.value as LookupModel;
      return value && value.key && value.key.trim().length
        ? null
        : { isRequired: { message } };
    };
  }
}
