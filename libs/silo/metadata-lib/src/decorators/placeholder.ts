import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have placeholder metadata.
 *
 * @param {string} label The placeholder string.
 */
export function Placeholder(placeholder: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'placeholder',
      placeholder,
      target,
      propertyKey,
    );
  };
}
