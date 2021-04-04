import { Injectable } from '@angular/core';
import { FormElementRegistryConfigMode } from '../models/form-element-registry-config-model';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderRegistryService {
  private _elementConfigMap = new Map<string, FormElementRegistryConfigMode>();

  register(key: string, elementConfigModel: FormElementRegistryConfigMode) {
    this._elementConfigMap.set(key, elementConfigModel);
  }

  get(key: string) {
    return this._elementConfigMap.get(key);
  }
}
