import { ReflectMetadataExtensions } from '../utils/reflect-metadata-extensions';

/**
 * Identify this property to have required to submit metadata.
 *
 * @param {boolean} [isRequiredToSubmit=true] The boolean flag which is default to true.
 */
export function IsRequiredToSubmit(isRequiredToSubmit = true) {
  return (target, propertyKey?: string) => {
    ReflectMetadataExtensions.defineMetadata(
      'isRequiredToSubmit',
      isRequiredToSubmit,
      target,
      propertyKey,
    );
  };
}
