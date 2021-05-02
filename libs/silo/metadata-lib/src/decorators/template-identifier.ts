import 'reflect-metadata';

/**
 * Identify this class/property to have template identifier metadata.
 *
 * @param {string} templateIdentifier The template identifier string.
 */
export function TemplateIdentifier(templateIdentifier: string) {
  return (target, propertyKey?: string) => {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata(
        'templateIdentifier',
        templateIdentifier,
        target,
        propertyKey,
      );
    }

    // class decorator
    if (target?.prototype) {
      Reflect.defineMetadata(
        'templateIdentifier',
        templateIdentifier,
        target.prototype,
      );
    }
  };
}
