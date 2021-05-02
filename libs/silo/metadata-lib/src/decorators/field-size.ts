import 'reflect-metadata';

/**
 * Identify this property to have field size metadata.
 *
 * @param {string} fieldSize The field size.
 */
export function FieldSize(fieldSize: string) {
  return (target, propertyKey?: string) => {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata('fieldSize', fieldSize, target, propertyKey);
    }
  };
}
