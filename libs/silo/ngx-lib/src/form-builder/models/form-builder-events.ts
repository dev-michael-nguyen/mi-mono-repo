import { FormElementDefinitionType } from './form-definition-types';
import { FormGroupDefinitionModel } from './form-group-definition-model';
import { FormTextDefinitionModel } from './form-text-definition-model';

export class FormBuilderEvent {}

export class UpdateFormGroupDefinitionEvent extends FormBuilderEvent {
  formGroupDefinitionModel: FormGroupDefinitionModel;
}

export class UpdateFormTextDefinitionEvent extends FormBuilderEvent {
  formTextDefinitionModel: FormTextDefinitionModel;
}

export class AddFormElementEvent extends FormBuilderEvent {
  type: FormElementDefinitionType;
  parentMemberKey: string;
}
