import { ComponentType } from '@angular/cdk/portal';
import { FormElementDataType } from './form-definition-types';
import { FormElementDefinitionModel } from './form-element-definition-model';

export class FormElementRegistryConfigModel {
  templateIdentifier: string;
  templateDisplayName: string;
  dataType: FormElementDataType;
  elementComponent: ComponentType<unknown>;
  definitionFormComponent: ComponentType<unknown>;
  createDefinitionModel?: () => FormElementDefinitionModel;
}
