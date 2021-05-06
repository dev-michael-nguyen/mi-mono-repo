import { FormCustomDefinitionModel } from './form-custom-definition-model';
import { FormElementDefinitionModel } from './form-element-definition-model';
import { FormElementMemberModel } from './form-element-member-model';
import { FormGroupDefinitionModel } from './form-group-definition-model';
import { FormTextDefinitionModel } from './form-text-definition-model';

/**
 * The definition model for a form.
 */
export class FormDefinitionModel {
  key: string;
  displayName: string;
  description: string;
  rootMemberKey: string;
  memberList: Array<FormElementMemberModel> = [];
  groupDefinitionList: Array<FormGroupDefinitionModel> = [];
  textDefinitionList: Array<FormTextDefinitionModel> = [];
  customDefinitionList: Array<FormCustomDefinitionModel> = [];
  definitionList: Array<FormElementDefinitionModel<unknown>> = [];
}
