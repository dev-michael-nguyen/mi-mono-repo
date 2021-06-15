import { FormElementTemplateIdentifier } from './form-definition-types';
import { FormElementDefinitionModel } from './form-element-definition-model';

export type FormBuilderEvent =
  | AddFormElementEvent
  | RemoveFormElementEvent
  | ImportFormEvent
  | UpdateFormElementDefinitionEvent;

export class AddFormElementEvent {
  templateIdentifier: FormElementTemplateIdentifier;
  templateDisplayName: string;
  parentMemberKey: string;
}

export class RemoveFormElementEvent {
  memberKey: string;
}

export class ImportFormEvent {
  formDefinitionJson: string;
}

export class UpdateFormElementDefinitionEvent {
  formElementDefinitionModel: FormElementDefinitionModel;
}
