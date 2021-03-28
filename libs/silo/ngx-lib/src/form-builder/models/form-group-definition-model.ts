import { FormGroupDefinitionType } from './form-definition-types';
/**
 * The definition model for a group element of a form.
 */
export class FormGroupDefinitionModel {
  identifier = 'Group';
  key: string;
  type: FormGroupDefinitionType;
  title: string;
  description: string;
}
