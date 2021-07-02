import { FormElementDataType } from './form-definition-types';

/**
 * The member model for an element of a form.
 */
export class FormElementMemberModel {
  key = '';
  dataType!: FormElementDataType;
  definitionKey = '';
  children: Array<FormElementMemberModel> = [];
}
