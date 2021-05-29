import { FormElementNodeModel } from './form-element-node-model';

export interface HasNodeModel {
  nodeModel: FormElementNodeModel;
}

export function instanceOfHasNodeModel(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arg: any,
): arg is HasNodeModel {
  return arg && arg.nodeModel;
}
