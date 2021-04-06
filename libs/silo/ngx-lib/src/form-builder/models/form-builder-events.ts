import { FormGroup } from '@angular/forms';
import { FormElementDefinitionType } from './form-definition-types';

export class FormBuilderEvent {}

export class GroupPropertyWindowValueChangesEvent extends FormBuilderEvent {
  formGroup: FormGroup;
}

export class TextPropertyWindowValueChangesEvent extends FormBuilderEvent {
  formGroup: FormGroup;
}

export class AddElementEvent extends FormBuilderEvent {
  type: FormElementDefinitionType;
  parentMemberKey: string;
}
