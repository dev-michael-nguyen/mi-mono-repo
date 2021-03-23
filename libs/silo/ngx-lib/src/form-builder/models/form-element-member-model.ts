/**
 * The member model for an element of a form.
 */
export class FormElementMemberModel {
  key: string;
  definitionKey: string;
  children: Array<FormElementMemberModel>;
}
