import { InjectionToken, Provider } from '@angular/core';

export const IS_PRODUCTION = new InjectionToken<false>('IS_PRODUCTION');

export const IsProductionProvider: Provider = {
  provide: IS_PRODUCTION,
  useValue: false
};