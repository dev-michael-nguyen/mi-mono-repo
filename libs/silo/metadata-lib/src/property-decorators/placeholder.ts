/**
 * Identify this property to have placeholder metadata.
 *
 * @param {string} label The placeholder string.
 */
export function Placeholder(placeholder: string) {
  return Reflect.metadata('placeholder', placeholder);
}
