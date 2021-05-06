import { FormElementDataType } from './form-definition-types';

/**
 * The definition model for a custom element of a form.
 */
export class FormCustomDefinitionModel {
  key: string = null;
  dataType: FormElementDataType = 'Unknown';
  templateIdentifier: string;
  templateDisplayName: string;
  [key: string]: unknown;
}
