import 'reflect-metadata';

/**
 * Identify this property to have hint metadata.
 *
 * @param {string} hint The hint string.
 */
export function Hint(hint: string) {
  return (target, propertyKey?: string) => {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata('hint', hint, target, propertyKey);
    }
  };
}
