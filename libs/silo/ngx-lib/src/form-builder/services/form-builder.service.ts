import { Injectable } from '@angular/core';
import { merge } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { FormDefinitionModel } from '../models/form-definition-model';
import { FormElementDefinitionModel } from '../models/form-element-definition-model';
import {
  FormElementDataType,
  FormElementTemplateIdentifier,
} from './../models/form-definition-types';
import { FormElementMemberModel } from './../models/form-element-member-model';
import { FormBuilderRegistryService } from './form-builder-registry.service';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(
    private _formBuilderRegistryService: FormBuilderRegistryService,
  ) {}

  createFormDefinition(): FormDefinitionModel {
    const formDefinitionModel = new FormDefinitionModel();
    formDefinitionModel.key = uuidv4();

    return formDefinitionModel;
  }

  addElement(
    formDefinitionModel: FormDefinitionModel,
    templateIdentifier: FormElementTemplateIdentifier,
    parentMemberKey: string,
  ) {
    const config = this._formBuilderRegistryService.get(templateIdentifier);
    if (config) {
      const { definitionModel, memberModel } = this._createElementDefinition(
        config.templateIdentifier,
        config.templateDisplayName,
        config.dataType,
      );
      formDefinitionModel.definitionList.push(definitionModel);
      this._addMember(formDefinitionModel, memberModel, parentMemberKey);
      return { definitionModel, memberModel };
    } else {
      const { definitionModel, memberModel } = this._createElementDefinition(
        templateIdentifier,
        null,
        'Unknown',
      );
      formDefinitionModel.definitionList.push(definitionModel);
      this._addMember(formDefinitionModel, memberModel, parentMemberKey);
      return { definitionModel, memberModel };
    }
  }

  removeElement(
    formDefinitionModel: FormDefinitionModel,
    memberKey: string,
  ): void {
    const memberModel = formDefinitionModel.memberList.find(
      (member) => member.key === memberKey,
    );
    // remove member from member list
    formDefinitionModel.memberList = formDefinitionModel.memberList.filter(
      (member) => member.key !== memberKey,
    );
    // remove member from member children list
    formDefinitionModel.memberList.forEach((member) => {
      member.children = member.children.filter(
        (child) => child.key !== memberKey,
      );
    });
    // remove definition
    formDefinitionModel.definitionList = formDefinitionModel.definitionList.filter(
      (definition) => definition.key !== memberModel.definitionKey,
    );
  }

  updateElementDefinition(
    formDefinitionModel: FormDefinitionModel,
    formElementDefinitionModel: FormElementDefinitionModel,
  ) {
    const definition = formDefinitionModel.definitionList.find(
      (x) => x.key == formElementDefinitionModel.key,
    );
    if (!definition) {
      throw new Error(`Cannot find definition`);
    }
    merge(definition, formElementDefinitionModel);
  }

  private _createMember(definitionKey: string, dataType: FormElementDataType) {
    const memberModel = new FormElementMemberModel();
    memberModel.key = uuidv4();
    memberModel.definitionKey = definitionKey;
    memberModel.dataType = dataType;

    return memberModel;
  }

  private _addMember(
    formDefinitionModel: FormDefinitionModel,
    memberModel: FormElementMemberModel,
    parentMemberKey: string,
  ): void {
    formDefinitionModel.memberList.push(memberModel);
    if (parentMemberKey) {
      const parentMember = formDefinitionModel.memberList.find(
        (member) => member.key === parentMemberKey,
      );
      parentMember.children.push(memberModel);
    }
  }

  private _createElementDefinition(
    templateIdentifier: string,
    templateDisplayName: string,
    dataType: FormElementDataType,
  ) {
    const definitionModel = new FormElementDefinitionModel();
    definitionModel.key = uuidv4();
    definitionModel.templateIdentifier = templateIdentifier;
    definitionModel.templateDisplayName = templateDisplayName;
    definitionModel.dataType = dataType;

    const memberModel = this._createMember(
      definitionModel.key,
      definitionModel.dataType,
    );

    return { definitionModel, memberModel };
  }
}
