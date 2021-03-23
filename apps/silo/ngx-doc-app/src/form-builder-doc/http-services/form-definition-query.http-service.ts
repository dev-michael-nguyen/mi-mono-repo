import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormDefinitionQueryResponseModel } from '../models/form-definition-query-response-model';
import { MockFormDefinitionQueryItemModel } from '../models/mock-form-definition-query-item-model';

@Injectable({
  providedIn: 'root',
})
export class FormDefinitionQueryHttpService {
  constructor() {}

  query(
    sort: string,
    order: string,
    page: number,
  ): Observable<FormDefinitionQueryResponseModel> {
    const responseModel: FormDefinitionQueryResponseModel = {
      items: [
        new MockFormDefinitionQueryItemModel(0),
        new MockFormDefinitionQueryItemModel(1),
      ],
      totalCount: 0,
    };
    responseModel.totalCount = responseModel.items.length;

    return of(responseModel);
  }
}
