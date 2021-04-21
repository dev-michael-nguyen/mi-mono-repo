/**
 * Identify this property to have label metadata.
 *
 * @param {string} label The label string.
 */
export function Label(label: string) {
  return Reflect.metadata('label', label);
}
