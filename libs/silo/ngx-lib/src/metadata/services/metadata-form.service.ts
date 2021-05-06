import { Injectable } from '@angular/core';
import {
  getMetadataIdentifier,
  Metadata,
  MetadataModel,
  PropertyMetadata,
} from '@silo/metadata';
import { FormCustomDefinitionModel } from '../../form-builder/models/form-custom-definition-model';
import { FormDefinitionModel } from '../../form-builder/models/form-definition-model';
import { FormElementTemplateIdentifier } from '../../form-builder/models/form-definition-types';
import { FormBuilderService } from '../../form-builder/services/form-builder.service';

@Injectable({
  providedIn: 'root',
})
export class MetadataFormService {
  constructor(private _formBuilderService: FormBuilderService) {}

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
    this.addEntriesAsElement(
      formDefinitionModel,
      metadataModel,
      metadata,
      memberModel.key,
    );

    return formDefinitionModel;
  }

  addEntriesAsElement(
    formDefinitionModel: FormDefinitionModel,
    metadataModel: MetadataModel,
    metadata: Metadata,
    parentMemberKey: string,
  ) {
    Object.entries(metadataModel).forEach(([propertyKey, propertyValue]) => {
      const propertyMetadata = metadata.propertyMetadataMap[propertyKey];

      if (propertyMetadata) {
        this.addPropertyAsElement(
          formDefinitionModel,
          propertyKey,
          propertyValue,
          propertyMetadata,
          parentMemberKey,
        );
      }

      if (propertyValue instanceof MetadataModel) {
        this.addMetadataModelAsElement(
          formDefinitionModel,
          propertyValue,
          null,
          parentMemberKey,
        );
        const metadataIdentifier = getMetadataIdentifier(propertyValue);
        this.addEntriesAsElement(
          formDefinitionModel,
          propertyValue,
          propertyValue.metadataMap[metadataIdentifier],
          parentMemberKey,
        );
      }
    });
  }

  addMetadataModelAsElement(
    formDefinitionModel: FormDefinitionModel,
    metadataModel: MetadataModel,
    templateIdentifier: FormElementTemplateIdentifier,
    parentMemberKey: string,
  ) {
    const metadataIdentifier = getMetadataIdentifier(metadataModel);
    const metadata = metadataModel.metadataMap[metadataIdentifier];
    const {
      definitionModel,
      memberModel,
    } = this._formBuilderService.addElement(
      formDefinitionModel,
      templateIdentifier,
      parentMemberKey,
    );
    if (!templateIdentifier) {
      definitionModel.templateIdentifier =
        metadata.classMetadata.templateIdentifier;
      definitionModel.templateDisplayName =
        metadata.classMetadata.templateDisplayName;
    }
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
    definitionModel.propertyKey = propertyKey;
    definitionModel.label = propertyMetadata.label;
    definitionModel.placeholder = propertyMetadata.placeholder;
    definitionModel.hint = propertyMetadata.hint;
    definitionModel.isRequired = propertyMetadata.isRequired;
    definitionModel.defaultValue = propertyValue;
  }
}
