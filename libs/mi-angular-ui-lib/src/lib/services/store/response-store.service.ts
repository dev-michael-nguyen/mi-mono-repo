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

  /**
   * Take a snapshot of a response in the store
   * @param id response id to take a snapshot
   */
  private _snapshot(id): void {
    this._snapshotStore[id] = this._copy(this._store[id]);
  }

  private _copy(target): any {
    if (!target) { return undefined; }
    return JSON.parse(JSON.stringify(target));
  }

  add(response: IResponseModel): string {
    const id = this.$generateId(response);

    this._store[id] = response;
    this.event$.next({ event: ResponseStoreServiceEvent.Added, id });

    this._snapshot(id);

    return id;
  }

}
