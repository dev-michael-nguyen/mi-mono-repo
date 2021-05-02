import 'reflect-metadata';

/**
 * Identify this property to have display order metadata.
 *
 * @param {number} orderNumber The order number.
 */
export function DisplayOrder(orderNumber: number) {
  return (target, propertyKey?: string) => {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata('displayOrder', orderNumber, target, propertyKey);
    }
  };
}
