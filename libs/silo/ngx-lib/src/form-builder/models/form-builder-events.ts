import { FormGroup } from '@angular/forms';

export class FormBuilderEvent {}

export class GroupPropertyWindowValueChangesEvent extends FormBuilderEvent {
  formGroup: FormGroup;
}
