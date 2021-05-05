import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have field outline size metadata.
 *
 * @param {string} fieldOutlineSize The field outline size.
 */
export function FieldOutlineSize(fieldOutlineSize: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'fieldOutlineSize',
      fieldOutlineSize,
      target,
      propertyKey,
    );
  };
}
