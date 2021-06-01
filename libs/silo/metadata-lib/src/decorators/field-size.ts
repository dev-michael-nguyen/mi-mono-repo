import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have field size metadata.
 *
 * @param {string} fieldSize The field size.
 * @param {string} fieldOutlineSize The field outline size.
 */
export function FieldSize(fieldSize: string, fieldOutlineSize?: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'fieldSize',
      fieldSize,
      target,
      propertyKey,
    );

    if (fieldOutlineSize) {
      ReflectMetadataExtensions.defineMetadata(
        'fieldOutlineSize',
        fieldOutlineSize,
        target,
        propertyKey,
      );
    }
  };
}
