import { MetadataModel } from './../models/metadata-model';

export const metadataIdentifierSymbol = 'metadataIdentifier';

/**
 * Identify this class/property to have metadata identifier metadata.
 *
 * @param {string} metadataIdentifier The metadata identifier
 */
export function MetadataIdentifier(metadataIdentifier: string) {
  return (target, propertyKey?: string) => {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata(
        metadataIdentifierSymbol,
        metadataIdentifier,
        target,
        propertyKey,
      );
    }

    // class decorator
    if (target?.prototype) {
      Reflect.defineMetadata(
        metadataIdentifierSymbol,
        metadataIdentifier,
        target.prototype,
      );
    }
  };
}

export function getMetadataIdentifier(metadataModel: MetadataModel): string {
  return Reflect.getMetadata(metadataIdentifierSymbol, metadataModel);
}
