import { Injectable } from '@angular/core';
import {
  getMetadataIdentifier,
  Metadata,
  MetadataModel,
  PropertyMetadata,
} from '@silo/metadata';
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
      null,
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
      if (Array.isArray(propertyValue)) {
        // TODO: Build node model for array
      } else if (propertyValue instanceof MetadataModel) {
        const { memberModel } = this.addMetadataModelAsElement(
          formDefinitionModel,
          propertyKey,
          propertyValue,
          null,
          parentMemberKey,
        );
        const metadataIdentifier = getMetadataIdentifier(propertyValue);
        this.addEntriesAsElement(
          formDefinitionModel,
          propertyValue,
          propertyValue.metadataMap[metadataIdentifier],
          memberModel.key,
        );
      } else {
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
      }
    });
  }

  addMetadataModelAsElement(
    formDefinitionModel: FormDefinitionModel,
    propertyKey: string,
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

    definitionModel.propertyKey = propertyKey;
    definitionModel.title = metadata.classMetadata.title;
    definitionModel.description = metadata.classMetadata.description;

    if (!templateIdentifier) {
      definitionModel.templateIdentifier =
        metadata.classMetadata.templateIdentifier;
      definitionModel.templateDisplayName =
        metadata.classMetadata.templateDisplayName;
    }

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

    Object.assign(element.definitionModel, propertyMetadata);
    element.definitionModel.propertyKey = propertyKey;
    element.definitionModel.defaultValue = propertyValue;
  }
}
