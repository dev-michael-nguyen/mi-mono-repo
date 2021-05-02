import 'reflect-metadata';

/**
 * Identify this class/property to have description metadata.
 *
 * @param {string} description The description string.
 */
export function Description(description: string) {
  return (target, propertyKey?: string) => {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata('description', description, target, propertyKey);
    }

    // class decorator
    if (target?.prototype) {
      Reflect.defineMetadata('description', description, target.prototype);
    }
  };
}
