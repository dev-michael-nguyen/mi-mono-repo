import { LookupModel } from './../../form-field/models/lookup-model';
/**
 * The definition model for a group element of a form.
 */
export class FormGroupDefinitionModel {
  identifier = 'Group';
  key: string;
  type: LookupModel;
  title: string;
  description: string;
}
