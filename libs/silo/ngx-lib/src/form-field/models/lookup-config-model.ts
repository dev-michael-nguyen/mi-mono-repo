import { LookupModel } from './lookup-model';

export class LookupConfigModel {
  url? = '';
  hasPaging? = false;
  lookups: Array<LookupModel> = [];
}
