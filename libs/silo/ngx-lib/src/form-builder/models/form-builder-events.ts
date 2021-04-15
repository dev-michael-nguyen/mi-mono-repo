import { FormElementDefinitionType } from './form-definition-types';
import { FormGroupDefinitionModel } from './form-group-definition-model';
import { FormTextDefinitionModel } from './form-text-definition-model';

export type FormBuilderEvent =
  | AddFormElementEvent
  | RemoveFormElementEvent
  | ImportFormEvent
  | UpdateFormGroupDefinitionEvent
  | UpdateFormTextDefinitionEvent;

export class AddFormElementEvent {
  type: FormElementDefinitionType;
  parentMemberKey: string;
}

export class RemoveFormElementEvent {
  memberKey: string;
}

export class ImportFormEvent {
  formDefinitionJson: string;
}

export class UpdateFormGroupDefinitionEvent {
  formGroupDefinitionModel: FormGroupDefinitionModel;
}

export class UpdateFormTextDefinitionEvent {
  formTextDefinitionModel: FormTextDefinitionModel;
}
