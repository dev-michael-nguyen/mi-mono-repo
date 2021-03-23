import { FormDefinitionQueryItemModel } from './form-definition-query-item-model';

export class MockFormDefinitionQueryItemModel extends FormDefinitionQueryItemModel {
  constructor(index) {
    super();
    const now = new Date();
    this.createdDateTime = now.toISOString();
    this.displayName = `Form Definition ${index + 1}`;
  }
}
