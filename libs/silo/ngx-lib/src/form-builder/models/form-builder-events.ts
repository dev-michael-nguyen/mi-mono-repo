import { FormElementTemplateIdentifier } from './form-definition-types';
import { FormElementDefinitionModel } from './form-element-definition-model';

export type FormBuilderEvent =
  | AddFormElementEvent
  | RemoveFormElementEvent
  | ImportFormEvent
  | UpdateFormElementDefinitionEvent;

export class AddFormElementEvent {
  templateIdentifier!: FormElementTemplateIdentifier;
  templateDisplayName = '';
  parentMemberKey = '';
}

export class RemoveFormElementEvent {
  memberKey = '';
}

export class ImportFormEvent {
  formDefinitionJson = '';
}

export class UpdateFormElementDefinitionEvent {
  formElementDefinitionModel!: FormElementDefinitionModel;
}
