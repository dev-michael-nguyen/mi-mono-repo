/**
 * Identify this property to have display order metadata.
 *
 * @param {number} orderNumber The order number.
 */
export function DisplayOrder(orderNumber: number) {
  return Reflect.metadata('displayOrder', orderNumber);
}
