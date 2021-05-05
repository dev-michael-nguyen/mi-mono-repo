import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have label metadata.
 *
 * @param {string} label The label string.
 */
export function Label(label: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'label',
      label,
      target,
      propertyKey,
    );
  };
}
