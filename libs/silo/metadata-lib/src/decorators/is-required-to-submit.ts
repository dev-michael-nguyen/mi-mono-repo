import 'reflect-metadata';

/**
 * Identify this property to have required to submit metadata.
 *
 * @param {boolean} [isRequiredToSubmit=true] The boolean flag which is default to true.
 */
export function IsRequiredToSubmit(isRequiredToSubmit = true) {
  return (target, propertyKey?: string) => {
    // property decorator
    if (target && propertyKey) {
      Reflect.defineMetadata(
        'isRequiredToSubmit',
        isRequiredToSubmit,
        target,
        propertyKey,
      );
    }
  };
}
