import { FormElementDefinitionIdentifier } from './form-definition-types';

/**
 * The member model for an element of a form.
 */
export class FormElementMemberModel {
  key: string;
  identifier: FormElementDefinitionIdentifier;
  definitionKey: string;
  children: Array<FormElementMemberModel> = [];
}
