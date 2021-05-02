/**
 * Identify this property to have field outline size metadata.
 *
 * @param {string} fieldOutlineSize The field outline size.
 */
export function FieldOutlineSize(fieldOutlineSize: string) {
  return Reflect.metadata('FieldOutlineSize', fieldOutlineSize);
}
