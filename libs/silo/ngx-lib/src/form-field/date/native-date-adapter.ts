export type NativeDate = Date | string | null;

export class NativeDateAdapter {
  static toDate(value: NativeDate): Date | null {
    if (!value) {
      return null;
    }

    if (value instanceof Date) {
      return value;
    }

    return new Date(value);
  }
}
