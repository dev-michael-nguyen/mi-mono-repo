import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have field size metadata.
 *
 * @param {string} fieldSize The field size.
 */
export function FieldSize(fieldSize: string) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'fieldSize',
      fieldSize,
      target,
      propertyKey,
    );
  };
}
