export enum FormTextDefinitionType {
  TextBox = 'TextBox',
  TextArea = 'TextArea',
}

/**
 * The definition model for a text element of a form.
 */
export class FormTextDefinitionModel {
  key: string;
  type: FormTextDefinitionType;
  label: string;
  placeholder: string;
  hint: string;
  isReadOnly = false;
  isRequiredToSave = false;
  isRequiredToSubmit = false;
}
