import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have hint metadata.
 *
 * @param {string} hint The hint string.
 */
export function Hint(hint: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata('hint', hint, target, propertyKey);
  };
}
