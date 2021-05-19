import { FormElementDefinitionModel } from './form-element-definition-model';
import { FormElementMemberModel } from './form-element-member-model';

/**
 * The definition model for a form.
 */
export class FormDefinitionModel {
  key: string;
  displayName: string;
  description: string;
  rootMemberKey: string;
  memberList: Array<FormElementMemberModel> = [];
  definitionList: Array<FormElementDefinitionModel<unknown>> = [];
}
