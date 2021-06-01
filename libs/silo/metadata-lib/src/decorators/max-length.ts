import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have maximum length metadata.
 *
 * @param {number} maxLength The maximum length.
 */
export function MaxLength(maxLength: number) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'maxLength',
      maxLength,
      target,
      propertyKey,
    );
  };
}
