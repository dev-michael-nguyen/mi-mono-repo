import { Injectable } from '@angular/core';
import { FormElementTemplateIdentifier } from '../models/form-definition-types';
import { FormElementRegistryConfigModel } from '../models/form-element-registry-config-model';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderRegistryService {
  private _elementConfigMap = new Map<
    FormElementTemplateIdentifier,
    FormElementRegistryConfigModel
  >();

  register(
    templateIdentifier: FormElementTemplateIdentifier,
    elementConfigModel: FormElementRegistryConfigModel,
  ) {
    this._elementConfigMap.set(templateIdentifier, elementConfigModel);
  }

  get(templateIdentifier: FormElementTemplateIdentifier) {
    return this._elementConfigMap.get(templateIdentifier);
  }
}
