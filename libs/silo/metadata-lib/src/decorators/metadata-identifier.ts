import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';
import { MetadataModel } from './../models/metadata-model';

export const metadataIdentifierSymbol = 'metadataIdentifier';

/**
 * Identify this class/property to have metadata identifier metadata.
 *
 * @param {string} metadataIdentifier The metadata identifier
 */
export function MetadataIdentifier(metadataIdentifier: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      metadataIdentifierSymbol,
      metadataIdentifier,
      target,
      propertyKey,
    );
  };
}

export function getMetadataIdentifier(metadataModel: MetadataModel): string {
  return ReflectMetadataExtensions.getMetadata(
    metadataIdentifierSymbol,
    metadataModel,
  );
}
