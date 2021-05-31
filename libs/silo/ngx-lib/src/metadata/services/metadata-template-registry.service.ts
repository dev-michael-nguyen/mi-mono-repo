import { Injectable } from '@angular/core';
import { FormElementTemplateIdentifier } from '../../form-builder/models/form-definition-types';
import { TemplateRegistryConfig } from '../models/template-registry-config';

@Injectable({
  providedIn: 'root',
})
export class MetadataTemplateRegistryService {
  private _templateRegistryConfigMap = new Map<
    FormElementTemplateIdentifier,
    TemplateRegistryConfig
  >();

  register(
    templateIdentifier: FormElementTemplateIdentifier,
    templateRegistryConfig: TemplateRegistryConfig,
  ) {
    this._templateRegistryConfigMap.set(
      templateIdentifier,
      templateRegistryConfig,
    );
  }

  get(templateIdentifier: string) {
    return this._templateRegistryConfigMap.get(templateIdentifier);
  }
}
