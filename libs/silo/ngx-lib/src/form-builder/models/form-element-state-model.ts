import { FormBuilderMode } from './form-definition-types';

/**
 * The state model for a form element.
 */
export class FormElementStateModel {
  mode: FormBuilderMode;
  isActive = false;
}
