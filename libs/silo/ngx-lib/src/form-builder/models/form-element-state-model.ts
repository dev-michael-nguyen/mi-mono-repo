import { ComponentRef } from '@angular/core';
import { FormBuilderType } from './form-definition-types';

/**
 * The state model for a form element.
 */
export class FormElementStateModel {
  formBuilderType: FormBuilderType;
  isActive = false;
  elementComponentRef: ComponentRef<unknown>;
}
