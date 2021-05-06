import { FormElementDataType } from './form-definition-types';

/**
 * The member model for an element of a form.
 */
export class FormElementMemberModel {
  key: string;
  dataType: FormElementDataType;
  definitionKey: string;
  children: Array<FormElementMemberModel> = [];
}
