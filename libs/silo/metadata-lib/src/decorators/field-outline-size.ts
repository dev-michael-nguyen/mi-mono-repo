import 'reflect-metadata';

/**
 * Identify this property to have field outline size metadata.
 *
 * @param {string} fieldOutlineSize The field outline size.
 */
export function FieldOutlineSize(fieldOutlineSize: string) {
  return (target, propertyKey?: string) => {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata(
        'fieldOutlineSize',
        fieldOutlineSize,
        target,
        propertyKey,
      );
    }
  };
}
