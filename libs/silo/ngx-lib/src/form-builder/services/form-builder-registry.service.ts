import { Injectable } from '@angular/core';
import { FormElementDefinitionType } from '../models/form-definition-types';
import { FormElementRegistryConfigMode } from '../models/form-element-registry-config-model';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderRegistryService {
  private _elementConfigMap = new Map<
    FormElementDefinitionType,
    FormElementRegistryConfigMode
  >();

  register(
    key: FormElementDefinitionType,
    elementConfigModel: FormElementRegistryConfigMode,
  ) {
    this._elementConfigMap.set(key, elementConfigModel);
  }

  get(key: FormElementDefinitionType) {
    return this._elementConfigMap.get(key);
  }
}
