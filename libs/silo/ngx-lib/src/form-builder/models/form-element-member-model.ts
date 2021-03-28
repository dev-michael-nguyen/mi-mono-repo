import { FormElementDefinitionIdentifier } from './form-definition-types';

/**
 * The member model for an element of a form.
 */
export class FormElementMemberModel {
  identifier: FormElementDefinitionIdentifier;
  key: string;
  definitionKey: string;
  children: Array<FormElementMemberModel>;
}
