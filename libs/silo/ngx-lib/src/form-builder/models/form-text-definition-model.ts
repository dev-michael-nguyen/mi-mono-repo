import { LookupModel } from './../../form-field/models/lookup-model';
import {
  FormElementDefinitionIdentifier,
  FormTextDefinitionType,
} from './form-definition-types';

/**
 * The definition model for a text element of a form.
 */
export class FormTextDefinitionModel {
  key: string;
  identifier: FormElementDefinitionIdentifier = 'Text';
  type: LookupModel<FormTextDefinitionType>;
  label: string;
  placeholder: string;
  hint: string;
  isReadOnly = false;
  isRequiredToSave = false;
  isRequiredToSubmit = false;
}
