import { ComponentType } from '@angular/cdk/portal';

export class FormElementRegistryConfigModel {
  templateIdentifier: string;
  templateDisplayName: string;
  elementComponent: ComponentType<unknown>;
  definitionFormComponent: ComponentType<unknown>;
}
