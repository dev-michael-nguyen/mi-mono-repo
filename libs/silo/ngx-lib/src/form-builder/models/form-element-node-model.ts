import { sortBy } from 'lodash';
import { FormDefinitionModel } from './form-definition-model';
import { FormElementDefinitionModel } from './form-element-definition-model';
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
    | FormElementDefinitionModel
    | FormTextDefinitionModel
    | FormGroupDefinitionModel;

  children: Array<FormElementNodeModel> = [];

  state = new FormElementStateModel();

  /**
   * Traverse and apply callback function to this node and all of its children.
   *
   * @param callbackfn The callback function to apply
   */
  forEach(callbackfn: (node: FormElementNodeModel) => void) {
    callbackfn(this);
    this.children.forEach((c) => callbackfn(c));
  }

  /**
   * Getter for form value instance of this node.
   */
  get formValueInstance() {
    // field level component should have form group instance which will have form value instance
    if (this.state.instanceOfGetFormValue) {
      return this.state.formValueInstance;
    }

    // container level component will construct form value instance object
    // with children property keys and their respective form value instances
    const rawValue = this.state.formGroup.value;
    const formValueInstance = {};
    Object.keys(rawValue).forEach((key) => {
      formValueInstance[key] = this.children.find(
        (c) => c.definitionModel.propertyKey === key,
      )?.state?.formValueInstance;
    });

    return formValueInstance;
  }
}

export class FormElementNodeModelExtensions {
  /**
   * Map flat form definition model to tree-like form element node model.
   *
   * @static
   * @param {FormDefinitionModel} formDefinitionModel - The form definition model to map from
   * @param {string} memberKey - Current member key that need to be mapped
   * @param {string} [parentMemberKey] - Parent member key of current member
   * @return {FormElementNodeModel} The
   */
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
    nodeModel.definitionModel = formDefinitionModel.definitionList.find(
      (x) => x.key === memberModel.definitionKey,
    );

    nodeModel.children = sortBy(
      memberModel.children.map((child) =>
        FormElementNodeModelExtensions.mapFromFormDefinitionModel(
          formDefinitionModel,
          child.key,
          memberKey,
        ),
      ),
      (n) => n.definitionModel.displayOrder,
    );

    return nodeModel;
  }
}
