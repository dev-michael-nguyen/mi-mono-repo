import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidatorErrorModel } from '../models/validator-error-model';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  static getFormGroupErrorMessage(formGroup: FormGroup): string {
    const firstControlKeyWithError = Object.keys(formGroup.controls).find(
      (key) => !!formGroup.controls[key].errors,
    );
    if (!firstControlKeyWithError) {
      return '';
    }
    const control = formGroup.get(firstControlKeyWithError);
    return this.getFormControlErrorMessage(control);
  }

  static getFormControlErrorMessage(formControl: AbstractControl | null) {
    if (!formControl?.errors) {
      return '';
    }
    const firstErrorKey = Object.keys(formControl.errors)[0];
    const firstErrorValue: ValidatorErrorModel =
      formControl.errors[firstErrorKey];
    return firstErrorValue.message;
  }
}
