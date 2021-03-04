import { FormGroup } from '@angular/forms';
import { IValidatorErrorValue } from './validator-error.model';

export class SiloValidatorErrorReporter {
  static getErrorMessage(formGroup: FormGroup) {
    const firstControlKeyWithError = Object.keys(formGroup.controls).find(
      (key) => !!formGroup.controls[key].errors,
    );
    if (!firstControlKeyWithError) {
      return null;
    }
    const control = formGroup.get(firstControlKeyWithError);
    const firstErrorKey = Object.keys(control.errors)[0];
    const firstErrorValue = control.errors[
      firstErrorKey
    ] as IValidatorErrorValue;
    return firstErrorValue.message;
  }
}
