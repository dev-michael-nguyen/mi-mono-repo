import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have maximum metadata.
 *
 * @param {number} max The maximum.
 */
export function Max(max: number) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata('max', max, target, propertyKey);
  };
}
