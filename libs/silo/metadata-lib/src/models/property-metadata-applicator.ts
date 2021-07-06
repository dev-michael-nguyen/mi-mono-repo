import { PropertyMetadata } from './property-metadata';

export interface PropertyMetadataApplicator {
  applyPropertyMetadata(
    propertyMetadata: PropertyMetadata,
    propertyValue: unknown,
  ): void;
}

export function implementApplyPropertyMetadata(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arg: any,
): arg is PropertyMetadataApplicator {
  return (
    arg &&
    arg.applyPropertyMetadata &&
    typeof arg.applyPropertyMetadata === 'function'
  );
}
