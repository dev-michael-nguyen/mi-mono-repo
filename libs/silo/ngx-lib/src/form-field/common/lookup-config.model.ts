import { LookupModel } from './lookup.model';

export class LookupConfig {
  url?: string;
  hasPaging?: boolean;
  lookups?: Array<LookupModel>;
}
