import { ComponentType } from '@angular/cdk/portal';
import { FormElementDataType } from './form-definition-types';

export class FormElementRegistryConfigModel {
  templateIdentifier: string;
  templateDisplayName: string;
  dataType: FormElementDataType;
  elementComponent: ComponentType<unknown>;
  definitionFormComponent: ComponentType<unknown>;
}
