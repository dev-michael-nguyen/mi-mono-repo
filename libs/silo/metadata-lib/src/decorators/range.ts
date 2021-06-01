import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have range metadata.
 *
 * @param {string} min The minimum.
 * @param {string} max The maximum.
 */
export function Range(min: number, max: number) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata('min', min, target, propertyKey);
    ReflectMetadataExtensions.defineMetadata('max', max, target, propertyKey);
  };
}
