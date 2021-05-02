import 'reflect-metadata';

/**
 * Identify this class/property to have title metadata.
 *
 * @param {string} title The title string.
 */
export function Title(title: string) {
  return (target, propertyKey?: string) => {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata('title', title, target, propertyKey);
    }

    // class decorator
    if (target?.prototype) {
      Reflect.defineMetadata('title', title, target.prototype);
    }
  };
}
