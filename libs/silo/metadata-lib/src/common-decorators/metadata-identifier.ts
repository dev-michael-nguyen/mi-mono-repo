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
        'metadataIdentifier',
        metadataIdentifier,
        target,
        propertyKey,
      );
    }

    // class decorator
    if (target?.prototype) {
      Reflect.defineMetadata(
        'metadataIdentifier',
        metadataIdentifier,
        target.prototype,
      );
    }
  };
}
