import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have length range metadata.
 *
 * @param {string} minLength The minimum length.
 * @param {string} maxLength The maximum length.
 */
export function LengthRange(minLength: number, maxLength: number) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'minLength',
      minLength,
      target,
      propertyKey,
    );
    ReflectMetadataExtensions.defineMetadata(
      'maxLength',
      maxLength,
      target,
      propertyKey,
    );
  };
}
