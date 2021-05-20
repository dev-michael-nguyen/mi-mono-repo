import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidatorErrorModel } from '../models/validator-error-model';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  static getFormGroupErrorMessage(formGroup: FormGroup) {
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

  static getFormControlErrorMessage(formControl: FormControl) {
    const firstErrorKey = Object.keys(formControl.errors)[0];
    const firstErrorValue = formControl.errors[
      firstErrorKey
    ] as ValidatorErrorModel;
    return firstErrorValue.message;
  }
}
