import { isEqual } from 'lodash';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  filter,
  finalize,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';

export class SaveSubject<
  RequestType,
  ResponseType
> extends Subject<RequestType> {
  private readonly _destroy$ = new Subject<boolean>();
  private _previousSubject: RequestType;

  readonly save$ = new Subject<RequestType>();
  readonly isSaving$ = new Subject<boolean>();

  setPreviousSubject(previousSubject: RequestType): void {
    this._previousSubject = previousSubject;
  }

  setDefaultConfig(
    saveFn: (saveSubject: RequestType) => Observable<ResponseType>,
    successFn: (response: ResponseType) => void,
    saveDebounceTime: number,
    destroy$?: Subject<boolean>,
  ) {
    this.save$
      .pipe(
        takeUntil(destroy$ ?? this._destroy$),
        debounceTime(saveDebounceTime),
        filter((saveSubject) => {
          const differences = this.getObjectDiff(
            saveSubject,
            this._previousSubject,
          );
          return !!differences.length;
        }),
        switchMap((saveSubject) => {
          this.isSaving$.next(true);
          this.setPreviousSubject(saveSubject);
          return saveFn(saveSubject).pipe(
            finalize(() => this.isSaving$.next(false)),
            tap((response) => successFn(response)),
          );
        }),
      )
      .subscribe();
    return this;
  }

  getObjectDiff(obj1: RequestType, obj2: RequestType) {
    const diff = Object.keys(obj1).reduce((result, key) => {
      if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
        result.push(key);
      } else if (isEqual(obj1[key], obj2[key])) {
        const resultKeyIndex = result.indexOf(key);
        result.splice(resultKeyIndex, 1);
      }
      return result;
    }, Object.keys(obj2));

    return diff;
  }

  destroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
