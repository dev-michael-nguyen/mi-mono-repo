import {
  FormElementDefinitionIdentifier,
  FormTextDefinitionType,
} from './form-definition-types';

/**
 * The definition model for a text element of a form.
 */
export class FormTextDefinitionModel {
  identifier: FormElementDefinitionIdentifier = 'Text';
  key: string;
  type: FormTextDefinitionType;
  label: string;
  placeholder: string;
  hint: string;
  isReadOnly = false;
  isRequiredToSave = false;
  isRequiredToSubmit = false;
}
