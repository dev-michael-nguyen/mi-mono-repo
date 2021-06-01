import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have minimum metadata.
 *
 * @param {number} min The minimum.
 */
export function Min(min: number) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata('min', min, target, propertyKey);
  };
}
