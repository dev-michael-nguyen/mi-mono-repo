import { InjectionToken, Provider } from '@angular/core';

export const ENABLE_SW = new InjectionToken<false>('ENABLE_SW');

export const EnableSwProvider: Provider = {
  provide: ENABLE_SW,
  useValue: false,
};
