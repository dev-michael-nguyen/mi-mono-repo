import 'reflect-metadata';

/**
 * Identify this property to have required to save metadata.
 *
 * @param {boolean} [isRequired=true] The boolean flag which is default to true.
 */
export function IsRequired(isRequired = true) {
  return (target, propertyKey?: string) => {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata('isRequired', isRequired, target, propertyKey);
    }
  };
}
