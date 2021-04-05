import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FormDefinitionModel } from '../models/form-definition-model';
import { FormGroupDefinitionModel } from '../models/form-group-definition-model';
import { FormTextDefinitionModel } from '../models/form-text-definition-model';
import {
  FormElementDefinitionIdentifier,
  FormElementDefinitionType,
} from './../models/form-definition-types';
import { FormElementMemberModel } from './../models/form-element-member-model';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderFactory {
  constructor() {}

  createFormDefinition(): FormDefinitionModel {
    const formDefinitionModel = new FormDefinitionModel();
    formDefinitionModel.key = uuidv4();
    this.addElement(formDefinitionModel, 'FormGroup', null);

    return formDefinitionModel;
  }

  addElement(
    formDefinitionModel: FormDefinitionModel,
    formElementDefinitionType: FormElementDefinitionType,
    parentMemberKey: string,
  ) {
    switch (formElementDefinitionType) {
      case 'FormGroup': {
        const { definitionModel, memberModel } = this._createFormGroup();
        formDefinitionModel.groupDefinitionList.push(definitionModel);
        formDefinitionModel.memberList.push(memberModel);
        formDefinitionModel.rootMemberKey = memberModel.key;
        return { definitionModel, memberModel };
      }
      case 'Section': {
        const { definitionModel, memberModel } = this._createSection();
        formDefinitionModel.groupDefinitionList.push(definitionModel);
        this._addMember(formDefinitionModel, parentMemberKey, memberModel);
        return { definitionModel, memberModel };
      }
      case 'TextBox': {
        const { definitionModel, memberModel } = this._createTextBox();
        formDefinitionModel.textDefinitionList.push(definitionModel);
        this._addMember(formDefinitionModel, parentMemberKey, memberModel);
        return { definitionModel, memberModel };
      }
    }
  }

  private _createMember(
    identifier: FormElementDefinitionIdentifier,
    definitionKey: string,
  ) {
    const memberModel = new FormElementMemberModel();
    memberModel.key = uuidv4();
    memberModel.identifier = identifier;
    memberModel.definitionKey = definitionKey;

    return memberModel;
  }

  private _addMember(
    formDefinitionModel: FormDefinitionModel,
    parentMemberKey: string,
    memberModel: FormElementMemberModel,
  ): void {
    formDefinitionModel.memberList.push(memberModel);
    const parentMember = formDefinitionModel.memberList.find(
      (member) => member.key === parentMemberKey,
    );
    parentMember.children.push(memberModel);
  }

  private _createFormGroup() {
    const definitionModel = new FormGroupDefinitionModel();
    definitionModel.key = uuidv4();
    definitionModel.type = {
      key: 'FormGroup',
      displayName: 'Form',
    };
    definitionModel.title = 'Form Title';

    const memberModel = this._createMember(
      definitionModel.identifier,
      definitionModel.key,
    );

    return { definitionModel, memberModel };
  }

  private _createSection() {
    const definitionModel = new FormGroupDefinitionModel();
    definitionModel.key = uuidv4();
    definitionModel.type = {
      key: 'Section',
      displayName: 'Section',
    };
    definitionModel.title = 'Section Title';

    const memberModel = this._createMember(
      definitionModel.identifier,
      definitionModel.key,
    );

    return { definitionModel, memberModel };
  }

  private _createTextBox() {
    const definitionModel = new FormTextDefinitionModel();
    definitionModel.key = uuidv4();
    definitionModel.type = {
      key: 'TextBox',
      displayName: 'Text Box',
    };
    definitionModel.label = 'Text Box Label';

    const memberModel = this._createMember(
      definitionModel.identifier,
      definitionModel.key,
    );

    return { definitionModel, memberModel };
  }
}
