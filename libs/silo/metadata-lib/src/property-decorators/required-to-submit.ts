/**
 * Identify this property to have required to submit metadata.
 *
 * @param {boolean} [isRequiredToSubmit=true] The boolean flag which is default to true.
 */
export function IsRequiredToSubmit(isRequiredToSubmit = true) {
  return Reflect.metadata('isRequiredToSubmit', isRequiredToSubmit);
}
