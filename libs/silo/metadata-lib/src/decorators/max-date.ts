import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have maximum date metadata.
 *
 * @param {string} maxDate The maximum date.
 */
export function MaxDate(maxDate: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'maxDate',
      maxDate,
      target,
      propertyKey,
    );
  };
}
