import { Injectable } from '@angular/core';
import { merge } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { FormCustomDefinitionModel } from '../models/form-custom-definition-model';
import { FormDefinitionModel } from '../models/form-definition-model';
import { FormElementDefinitionModel } from '../models/form-element-definition-model';
import { FormGroupDefinitionModel } from '../models/form-group-definition-model';
import { FormTextDefinitionModel } from '../models/form-text-definition-model';
import {
  FormElementDataType,
  FormElementTemplateIdentifier,
} from './../models/form-definition-types';
import { FormElementMemberModel } from './../models/form-element-member-model';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
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
    switch (templateIdentifier) {
      case 'FormGroup': {
        const { definitionModel, memberModel } = this._createFormGroup();
        formDefinitionModel.groupDefinitionList.push(definitionModel);
        this._addMember(formDefinitionModel, memberModel, parentMemberKey);
        return { definitionModel, memberModel };
      }
      case 'Section': {
        const { definitionModel, memberModel } = this._createSection();
        formDefinitionModel.groupDefinitionList.push(definitionModel);
        this._addMember(formDefinitionModel, memberModel, parentMemberKey);
        return { definitionModel, memberModel };
      }
      case 'TextBox': {
        const { definitionModel, memberModel } = this._createTextBox();
        formDefinitionModel.textDefinitionList.push(definitionModel);
        this._addMember(formDefinitionModel, memberModel, parentMemberKey);
        return { definitionModel, memberModel };
      }
      case 'TextArea': {
        const { definitionModel, memberModel } = this._createTextArea();
        formDefinitionModel.textDefinitionList.push(definitionModel);
        this._addMember(formDefinitionModel, memberModel, parentMemberKey);
        return { definitionModel, memberModel };
      }
      default: {
        const { definitionModel, memberModel } = this._createCustomDefinition();
        formDefinitionModel.customDefinitionList.push(definitionModel);
        this._addMember(formDefinitionModel, memberModel, parentMemberKey);
        return { definitionModel, memberModel };
      }
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
    switch (memberModel.dataType) {
      case 'Object' || 'Array': {
        formDefinitionModel.groupDefinitionList = formDefinitionModel.groupDefinitionList.filter(
          (definition) => definition.key !== memberModel.definitionKey,
        );
        break;
      }
      case 'Text': {
        formDefinitionModel.textDefinitionList = formDefinitionModel.textDefinitionList.filter(
          (definition) => definition.key !== memberModel.definitionKey,
        );
        break;
      }
    }
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

  updateGroupDefinition(
    formDefinitionModel: FormDefinitionModel,
    formGroupDefinitionModel: FormGroupDefinitionModel,
  ) {
    const found = formDefinitionModel.groupDefinitionList.find(
      (x) => x.key == formGroupDefinitionModel.key,
    );
    if (!found) {
      throw new Error(`Cannot find group definition`);
    }
    merge(found, formGroupDefinitionModel);
  }

  updateTextDefinition(
    formDefinitionModel: FormDefinitionModel,
    formTextDefinitionModel: FormTextDefinitionModel,
  ) {
    const found = formDefinitionModel.textDefinitionList.find(
      (x) => x.key == formTextDefinitionModel.key,
    );
    if (!found) {
      throw new Error(`Cannot find text definition`);
    }
    merge(found, formTextDefinitionModel);
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

  private _createCustomDefinition() {
    const definitionModel = new FormCustomDefinitionModel();
    definitionModel.key = uuidv4();

    const memberModel = this._createMember(
      definitionModel.key,
      definitionModel.dataType,
    );

    return { definitionModel, memberModel };
  }

  private _createFormGroup() {
    const definitionModel = new FormGroupDefinitionModel();
    definitionModel.key = uuidv4();
    definitionModel.templateIdentifier = 'FormGroup';
    definitionModel.templateDisplayName = 'Form';
    definitionModel.title = 'Form Title';

    const memberModel = this._createMember(
      definitionModel.key,
      definitionModel.dataType,
    );

    return { definitionModel, memberModel };
  }

  private _createSection() {
    const definitionModel = new FormGroupDefinitionModel();
    definitionModel.key = uuidv4();
    definitionModel.templateIdentifier = 'Section';
    definitionModel.templateDisplayName = 'Section';
    definitionModel.title = 'Section Title';

    const memberModel = this._createMember(
      definitionModel.key,
      definitionModel.dataType,
    );

    return { definitionModel, memberModel };
  }

  private _createTextBox() {
    const definitionModel = new FormTextDefinitionModel();
    definitionModel.key = uuidv4();
    definitionModel.templateIdentifier = 'TextBox';
    definitionModel.templateDisplayName = 'Text Box';
    definitionModel.label = 'Text Box Label';

    const memberModel = this._createMember(
      definitionModel.key,
      definitionModel.dataType,
    );

    return { definitionModel, memberModel };
  }

  private _createTextArea() {
    const definitionModel = new FormTextDefinitionModel();
    definitionModel.key = uuidv4();
    definitionModel.templateIdentifier = 'TextArea';
    definitionModel.templateDisplayName = 'Text Area';
    definitionModel.label = 'Text Area Label';

    const memberModel = this._createMember(
      definitionModel.key,
      definitionModel.dataType,
    );

    return { definitionModel, memberModel };
  }
}
