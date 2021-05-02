import 'reflect-metadata';

/**
 * Identify this property to have placeholder metadata.
 *
 * @param {string} label The placeholder string.
 */
export function Placeholder(placeholder: string) {
  return (target, propertyKey?: string) => {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata('placeholder', placeholder, target, propertyKey);
    }
  };
}
