import { FormElementMemberModel } from './form-element-member-model';
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
  textDefinitionList: Array<FormTextDefinitionModel> = [];
}
