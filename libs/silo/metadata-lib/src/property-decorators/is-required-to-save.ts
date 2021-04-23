/**
 * Identify this property to have required to save metadata.
 *
 * @param {boolean} [isRequiredToSave=true] The boolean flag which is default to true.
 */
export function IsRequiredToSave(isRequiredToSave = true) {
  return Reflect.metadata('isRequiredToSave', isRequiredToSave);
}
