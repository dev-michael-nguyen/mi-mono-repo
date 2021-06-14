import { ComponentType } from '@angular/cdk/portal';
import {
  FormElementDataType,
  FormElementTemplateIdentifier,
} from './form-definition-types';
import { FormElementDefinitionModel } from './form-element-definition-model';

export class FormElementRegistryConfigModel {
  templateIdentifier: FormElementTemplateIdentifier;
  templateDisplayName: string;
  dataType: FormElementDataType;
  elementComponent: ComponentType<unknown>;
  definitionFormComponent: ComponentType<unknown>;
  createDefinitionModel?: () => FormElementDefinitionModel;
}
