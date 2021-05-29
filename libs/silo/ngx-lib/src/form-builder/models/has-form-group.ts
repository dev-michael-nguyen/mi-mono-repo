import { FormGroup } from '@angular/forms';

export interface HasFormGroup {
  formGroup: FormGroup;
}

export function instanceOfHasFormGroup(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arg: any,
): arg is HasFormGroup {
  return arg && arg.formGroup;
}
