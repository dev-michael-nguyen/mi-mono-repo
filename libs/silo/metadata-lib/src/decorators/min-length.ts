import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have minimum length metadata.
 *
 * @param {number} minLength The minimum length.
 */
export function MinLength(minLength: number) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'minLength',
      minLength,
      target,
      propertyKey,
    );
  };
}
