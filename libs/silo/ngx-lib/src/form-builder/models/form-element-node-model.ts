import { FormCustomDefinitionModel } from './form-custom-definition-model';
import { FormDefinitionModel } from './form-definition-model';
import { FormElementMemberModel } from './form-element-member-model';
import { FormElementStateModel } from './form-element-state-model';
import { FormGroupDefinitionModel } from './form-group-definition-model';
import { FormTextDefinitionModel } from './form-text-definition-model';

/**
 * The node model for a form element.
 */
export class FormElementNodeModel {
  parentMemberKey: string;

  memberKey: string;
  memberModel: FormElementMemberModel;

  definitionKey: string;
  definitionModel:
    | FormCustomDefinitionModel
    | FormTextDefinitionModel
    | FormGroupDefinitionModel;

  children: Array<FormElementNodeModel> = [];

  state = new FormElementStateModel();

  forEach(callbackfn: (node: FormElementNodeModel) => void) {
    callbackfn(this);
    this.children.forEach((c) => callbackfn(c));
  }
}

export class FormElementNodeModelExtensions {
  static mapFromFormDefinitionModel(
    formDefinitionModel: FormDefinitionModel,
    memberKey: string,
    parentMemberKey?: string,
  ): FormElementNodeModel {
    const nodeModel = new FormElementNodeModel();
    nodeModel.parentMemberKey =
      parentMemberKey ||
      formDefinitionModel.memberList.find((x) =>
        x.children.find((c) => c.key === memberKey),
      )?.key;
    const memberModel = formDefinitionModel.memberList.find(
      (x) => x.key === memberKey,
    );

    nodeModel.memberKey = memberKey;
    nodeModel.definitionKey = memberModel.definitionKey;
    nodeModel.memberModel = memberModel;
    switch (memberModel.category) {
      case 'Group': {
        nodeModel.definitionModel = formDefinitionModel.groupDefinitionList.find(
          (x) => x.key === memberModel.definitionKey,
        );
        break;
      }
      case 'Text': {
        nodeModel.definitionModel = formDefinitionModel.textDefinitionList.find(
          (x) => x.key === memberModel.definitionKey,
        );
        break;
      }
      case 'Custom': {
        nodeModel.definitionModel = formDefinitionModel.customDefinitionList.find(
          (x) => x.key === memberModel.definitionKey,
        );
        break;
      }
    }

    nodeModel.children = memberModel.children.map((child) =>
      FormElementNodeModelExtensions.mapFromFormDefinitionModel(
        formDefinitionModel,
        child.key,
        memberKey,
      ),
    );

    return nodeModel;
  }
}
