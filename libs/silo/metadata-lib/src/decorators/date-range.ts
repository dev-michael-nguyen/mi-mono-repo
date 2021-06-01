import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have date range metadata.
 *
 * @param {string} minDate The minimum date.
 * @param {string} maxDate The maximum date.
 */
export function DateRange(minDate: string, maxDate: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'minDate',
      minDate,
      target,
      propertyKey,
    );
    ReflectMetadataExtensions.defineMetadata(
      'maxDate',
      maxDate,
      target,
      propertyKey,
    );
  };
}
