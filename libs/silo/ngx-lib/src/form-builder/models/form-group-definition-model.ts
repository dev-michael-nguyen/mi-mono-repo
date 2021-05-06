import {
  FormElementDefinitionCategory,
  FormGroupTemplateIdentifier,
} from './form-definition-types';
/**
 * The definition model for a group element of a form.
 */
export class FormGroupDefinitionModel {
  key: string;
  category: FormElementDefinitionCategory = 'Group';
  templateIdentifier: FormGroupTemplateIdentifier = null;
  templateDisplayName: string = null;
  title: string;
  description: string;
  defaultValue: unknown;
}
