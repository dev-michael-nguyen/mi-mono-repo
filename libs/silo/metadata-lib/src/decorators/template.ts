import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this class/property to have template metadata.
 *
 * @param {string} identifier The template identifier.
 * @param {string} displayName The template display name.
 */
export function Template(identifier: string, displayName: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'templateIdentifier',
      identifier,
      target,
      propertyKey,
    );
    ReflectMetadataExtensions.defineMetadata(
      'templateDisplayName',
      displayName,
      target,
      propertyKey,
    );
  };
}
