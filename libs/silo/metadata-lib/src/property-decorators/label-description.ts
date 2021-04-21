/**
 * Identify this property to have label description metadata.
 *
 * @param {string} labelDescription The label description string.
 */
export function LabelDescription(labelDescription: string) {
  return Reflect.metadata('labelDescription', labelDescription);
}
