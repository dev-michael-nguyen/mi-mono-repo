export class LookupModel {
  key: string;
  displayName: string;
}

export class LookupConfig {
  url?: string;
  hasPaging?: boolean;
  lookups?: Array<LookupModel>;
}
