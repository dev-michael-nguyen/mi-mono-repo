import { FormElementTemplateIdentifier } from './form-definition-types';
import { FormElementDefinitionModel } from './form-element-definition-model';
import { FormGroupDefinitionModel } from './form-group-definition-model';
import { FormTextDefinitionModel } from './form-text-definition-model';

export type FormBuilderEvent =
  | AddFormElementEvent
  | RemoveFormElementEvent
  | ImportFormEvent
  | UpdateFormGroupDefinitionEvent
  | UpdateFormTextDefinitionEvent;

export class AddFormElementEvent {
  templateIdentifier: FormElementTemplateIdentifier;
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

export class UpdateFormGroupDefinitionEvent {
  formGroupDefinitionModel: FormGroupDefinitionModel;
}

export class UpdateFormTextDefinitionEvent {
  formTextDefinitionModel: FormTextDefinitionModel;
}
