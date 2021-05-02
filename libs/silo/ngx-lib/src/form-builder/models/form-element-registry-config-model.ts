import { ComponentType } from '@angular/cdk/portal';

export class FormElementRegistryConfigModel {
  elementType: ComponentType<unknown>;
  windowType: ComponentType<unknown>;
}
