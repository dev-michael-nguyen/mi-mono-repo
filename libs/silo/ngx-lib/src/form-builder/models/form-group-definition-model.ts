import { LookupModel } from './../../form-field/models/lookup-model';
import { FormElementDefinitionIdentifier } from './form-definition-types';
/**
 * The definition model for a group element of a form.
 */
export class FormGroupDefinitionModel {
  key: string;
  identifier: FormElementDefinitionIdentifier = 'Group';
  type: LookupModel;
  title: string;
  description: string;
}
