import { FormGroup } from '@angular/forms';
import { ValidatorErrorModel } from '../models/validator-error-model';

export class ValidatorMixin {
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
    ] as ValidatorErrorModel;
    return firstErrorValue.message;
  }
}
