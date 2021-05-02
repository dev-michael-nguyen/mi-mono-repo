/**
 * Identify this property to have field size metadata.
 *
 * @param {string} fieldSize The field size.
 */
export function FieldSize(fieldSize: string) {
  return Reflect.metadata('fieldSize', fieldSize);
}
