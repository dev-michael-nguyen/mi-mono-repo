import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this class/property to have description metadata.
 *
 * @param {string} description The description string.
 */
export function Description(description: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'description',
      description,
      target,
      propertyKey,
    );
  };
}
