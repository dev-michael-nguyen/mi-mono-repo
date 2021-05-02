import { LookupModel } from './../../form-field/models/lookup-model';
import {
  FormElementDefinitionCategory,
  FormGroupDefinitionType,
} from './form-definition-types';
/**
 * The definition model for a group element of a form.
 */
export class FormGroupDefinitionModel {
  key: string;
  category: FormElementDefinitionCategory = 'Group';
  type: LookupModel<FormGroupDefinitionType>;
  title: string;
  description: string;
}
