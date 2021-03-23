import { FormDefinitionQueryItemModel } from './form-definition-query-item-model';

export class FormDefinitionQueryResponseModel {
  items: Array<FormDefinitionQueryItemModel>;
  totalCount: number;
}
