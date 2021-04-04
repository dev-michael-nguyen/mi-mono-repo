import { FormDefinitionModel } from './form-definition-model';
import { FormElementMemberModel } from './form-element-member-model';
import { FormElementStateModel } from './form-element-state-model';
import { FormGroupDefinitionModel } from './form-group-definition-model';
import { FormTextDefinitionModel } from './form-text-definition-model';

/**
 * The node model for a form element.
 */
export class FormElementNodeModel {
  memberKey: string;
  memberModel: FormElementMemberModel;

  definitionKey: string;
  definitionModel: FormTextDefinitionModel | FormGroupDefinitionModel;

  children: Array<FormElementNodeModel> = [];

  state = new FormElementStateModel();

  static mapFromMemberKey(
    formDefinitionModel: FormDefinitionModel,
    memberKey: string,
  ) {
    const nodeModel = new FormElementNodeModel();
    const memberModel = formDefinitionModel.memberList.find(
      (x) => x.key === memberKey,
    );

    nodeModel.memberKey = memberKey;
    nodeModel.definitionKey = memberModel.definitionKey;
    nodeModel.memberModel = memberModel;
    switch (memberModel.identifier) {
      case 'Group': {
        nodeModel.definitionModel = formDefinitionModel.groupDefinitionList.find(
          (x) => x.key === memberModel.definitionKey,
        );
        break;
      }
    }

    nodeModel.children = memberModel.children.map((child) =>
      FormElementNodeModel.mapFromMemberKey(formDefinitionModel, child.key),
    );

    return nodeModel;
  }
}
