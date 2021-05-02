import { FormElementDefinitionCategory } from './form-definition-types';

/**
 * The member model for an element of a form.
 */
export class FormElementMemberModel {
  key: string;
  category: FormElementDefinitionCategory;
  definitionKey: string;
  children: Array<FormElementMemberModel> = [];
}
