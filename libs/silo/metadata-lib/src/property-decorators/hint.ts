/**
 * Identify this property to have hint metadata.
 *
 * @param {string} hint The hint string.
 */
export function Hint(hint: string) {
  return Reflect.metadata('hint', hint);
}
