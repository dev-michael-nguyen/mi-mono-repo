import { LookupModel } from './lookup-model';

export class LookupConfigModel {
  url?: string;
  hasPaging?: boolean;
  lookups?: Array<LookupModel>;
}
