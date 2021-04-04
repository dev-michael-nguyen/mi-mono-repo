import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FormDefinitionModel } from '../models/form-definition-model';
import { FormGroupDefinitionModel } from '../models/form-group-definition-model';
import { FormElementDefinitionType } from './../models/form-definition-types';
import { FormElementMemberModel } from './../models/form-element-member-model';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderFactory {
  constructor() {}

  createFormDefinition(): FormDefinitionModel {
    const formDefinitionModel = new FormDefinitionModel();
    formDefinitionModel.key = uuidv4();
    this._addFormGroup(formDefinitionModel);

    return formDefinitionModel;
  }

  addElement(
    formDefinitionModel: FormDefinitionModel,
    formElementDefinitionType: FormElementDefinitionType,
    parentMemberKey: string,
  ) {
    switch (formElementDefinitionType) {
      case 'Section': {
        return this._addSection(formDefinitionModel, parentMemberKey);
      }
    }
  }

  private _createFormGroup() {
    const definitionModel = new FormGroupDefinitionModel();
    definitionModel.key = uuidv4();
    definitionModel.type = {
      key: 'FormGroup',
      displayName: 'Form',
    };
    definitionModel.title = 'Form Title';

    const memberModel = new FormElementMemberModel();
    memberModel.key = uuidv4();
    memberModel.identifier = definitionModel.identifier;
    memberModel.definitionKey = definitionModel.key;

    return { definitionModel, memberModel };
  }

  private _addFormGroup(formDefinitionModel: FormDefinitionModel) {
    const { definitionModel, memberModel } = this._createFormGroup();

    formDefinitionModel.groupDefinitionList.push(definitionModel);
    formDefinitionModel.memberList.push(memberModel);
    formDefinitionModel.rootMemberKey = memberModel.key;

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

    const memberModel = new FormElementMemberModel();
    memberModel.key = uuidv4();
    memberModel.identifier = definitionModel.identifier;
    memberModel.definitionKey = definitionModel.key;

    return { definitionModel, memberModel };
  }

  private _addSection(
    formDefinitionModel: FormDefinitionModel,
    parentMemberKey: string,
  ) {
    const { definitionModel, memberModel } = this._createSection();

    formDefinitionModel.groupDefinitionList.push(definitionModel);
    formDefinitionModel.memberList.push(memberModel);

    const parentMember = formDefinitionModel.memberList.find(
      (member) => member.key === parentMemberKey,
    );
    parentMember.children.push(memberModel);

    return { definitionModel, memberModel };
  }
}
