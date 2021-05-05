import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have display order metadata.
 *
 * @param {number} orderNumber The order number.
 */
export function DisplayOrder(orderNumber: number) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'displayOrder',
      orderNumber,
      target,
      propertyKey,
    );
  };
}
