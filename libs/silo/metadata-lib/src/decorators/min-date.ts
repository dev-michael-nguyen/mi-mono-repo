import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have minimum date metadata.
 *
 * @param {string} minDate The minimum date.
 */
export function MinDate(minDate: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'minDate',
      minDate,
      target,
      propertyKey,
    );
  };
}
