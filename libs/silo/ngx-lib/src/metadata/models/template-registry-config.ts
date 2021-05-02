import { ComponentType } from '@angular/cdk/portal';

export class TemplateRegistryConfig {
  templateIdentifier?: string;
  componentType: ComponentType<unknown>;
}
