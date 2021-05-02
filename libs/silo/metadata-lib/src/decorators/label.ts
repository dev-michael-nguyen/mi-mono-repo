import 'reflect-metadata';

/**
 * Identify this property to have label metadata.
 *
 * @param {string} label The label string.
 */
export function Label(label: string) {
  return (target, propertyKey?: string) => {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata('label', label, target, propertyKey);
    }
  };
}
