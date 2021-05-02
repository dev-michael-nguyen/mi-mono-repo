import { FormElementDefinitionCategory } from './form-definition-types';

/**
 * The definition model for a custom element of a form.
 */
export class FormCustomDefinitionModel {
  key: string = null;
  category: FormElementDefinitionCategory = 'Custom';
  [key: string]: unknown;
}