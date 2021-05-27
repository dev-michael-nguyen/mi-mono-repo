import { ComponentType } from '@angular/cdk/portal';
import { FormGroup } from '@angular/forms';

export class TemplateRegistryConfig {
  templateIdentifier: string;
  metadataComponent: ComponentType<unknown>;
  getComponentValue?: (formGroup: FormGroup) => unknown;
}
