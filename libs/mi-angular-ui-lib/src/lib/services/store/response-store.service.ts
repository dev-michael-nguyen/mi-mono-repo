import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum ResponseStoreServiceEvent {
  Added = 'added',
  Restored = 'restored',
  Deleted = 'deleted'
}

export interface IResponseModel {
  $type: string;
  hasError: boolean;
  lookups: any;
  metadata: any;
  model: {
    $type: string;
    key?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ResponseStoreService {

  private _store: any = {};
  private _snapshotStore: any = {};

  event$ = new Subject<any>();

  /**
   * Generate id for response to be used in response store
   * @param response response to generate id for
   * @return id of the response
   */
  $generateId(response: IResponseModel): string {
    const id = response.model && response.model.key
      ? `${response.$type}|${response.model.key}`
      : `${response.$type}`;

    return id;
  }

  $copy(target): any {
    if (!target) { return undefined; }
    return JSON.parse(JSON.stringify(target));
  }

  add(response: IResponseModel): string {
    const id = this.$generateId(response);
    const copiedResponse = this.$copy(response);

    this._store[id] = copiedResponse;
    this._snapshotStore[id] = copiedResponse;
    this.event$.next({ event: ResponseStoreServiceEvent.Added, id });

    return id;
  }

}
