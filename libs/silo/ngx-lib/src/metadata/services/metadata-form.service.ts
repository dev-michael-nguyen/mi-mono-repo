import { Injectable } from '@angular/core';
import {
  getMetadataIdentifier,
  MetadataModel,
  PropertyMetadata,
} from '@silo/metadata';
import { FormCustomDefinitionModel } from '../../form-builder/models/form-custom-definition-model';
import { FormDefinitionModel } from '../../form-builder/models/form-definition-model';
import { FormElementTemplateIdentifier } from '../../form-builder/models/form-definition-types';
import { FormBuilderService } from '../../form-builder/services/form-builder.service';
import { MetadataTemplateRegistryService } from './metadata-template-registry.service';

@Injectable({
  providedIn: 'root',
})
export class MetadataFormService {
  constructor(
    private _formBuilderService: FormBuilderService,
    private _metadataTemplateRegistryService: MetadataTemplateRegistryService,
  ) {}

  createFormDefinition(metadataModel: MetadataModel) {
    const formDefinitionModel = this._formBuilderService.createFormDefinition();

    // add root
    const { metadata, memberModel } = this.addMetadataModelAsElement(
      formDefinitionModel,
      metadataModel,
      'FormGroup',
      null,
    );
    formDefinitionModel.rootMemberKey = memberModel.key;

    // add children
    Object.entries(metadata.propertyMetadataMap).forEach(
      ([propertyKey, propertyMetadata]) => {
        const propertyValue = metadataModel[propertyKey];
        this.addPropertyAsElement(
          formDefinitionModel,
          propertyKey,
          propertyValue,
          propertyMetadata,
          memberModel.key,
        );
      },
    );

    return formDefinitionModel;
  }

  addMetadataModelAsElement(
    formDefinitionModel: FormDefinitionModel,
    metadataModel: MetadataModel,
    formElementDefinitionType: FormElementTemplateIdentifier,
    parentMemberKey: string,
  ) {
    const metadataIdentifier = getMetadataIdentifier(metadataModel);
    const metadata = metadataModel.metadataMap[metadataIdentifier];
    const {
      definitionModel,
      memberModel,
    } = this._formBuilderService.addElement(
      formDefinitionModel,
      formElementDefinitionType,
      parentMemberKey,
    );
    definitionModel.title = metadata.classMetadata.title;
    definitionModel.description = metadata.classMetadata.description;

    return { metadata, definitionModel, memberModel };
  }

  addPropertyAsElement(
    formDefinitionModel: FormDefinitionModel,
    propertyKey: string,
    propertyValue: unknown,
    propertyMetadata: PropertyMetadata,
    parentMemberKey: string,
  ) {
    const element = this._formBuilderService.addElement(
      formDefinitionModel,
      propertyMetadata.templateIdentifier,
      parentMemberKey,
    );

    const definitionModel = element.definitionModel as FormCustomDefinitionModel;
    if (definitionModel.category == 'Custom') {
      definitionModel.type = {
        key: propertyMetadata.templateIdentifier,
        displayName: propertyMetadata.templateIdentifier,
      };
    }
    definitionModel.label = propertyMetadata.label;
    definitionModel.placeholder = propertyMetadata.placeholder;
    definitionModel.hint = propertyMetadata.hint;
    definitionModel.defaultValue = propertyValue;
  }
}
