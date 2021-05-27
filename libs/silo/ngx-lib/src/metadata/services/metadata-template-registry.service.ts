import { Injectable } from '@angular/core';
import { TemplateRegistryConfig } from '../models/template-registry-config';

@Injectable({
  providedIn: 'root',
})
export class MetadataTemplateRegistryService {
  private _templateRegistryConfigMap = new Map<
    string,
    TemplateRegistryConfig
  >();

  register(
    templateIdentifier: string,
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
