export interface GetFormValue {
  getFormValue(): unknown;
}

export function instanceOfGetFormValue(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arg: any,
): arg is GetFormValue {
  return arg && arg.getFormValue && typeof arg.getFormValue === 'function';
}
