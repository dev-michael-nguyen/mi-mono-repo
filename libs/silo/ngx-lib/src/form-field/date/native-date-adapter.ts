export type NativeDate = Date | string | null;

export class NativeDateAdapter {
  static toDate(value: NativeDate): Date | null {
    if (!value) {
      return null;
    }

    const nativeDate = value instanceof Date ? value : new Date(value);
    if (nativeDate.toString() === 'Invalid Date') {
      throw new Error('Invalid Date');
    }
    return nativeDate;
  }

  static toLocaleDateFromZeroHourUtc(isoString: string): Date | null {
    if (!isoString) {
      return null;
    }

    const isZeroHourRegex = new RegExp('T00:00:00.*0*Z$');
    if (!isZeroHourRegex.test(isoString)) {
      throw new Error(
        'isoString does not end with T00:00:00Z or T00:00:00.000Z',
      );
    }

    const localeIsoString = isoString.slice(0, isoString.indexOf('Z'));
    return new Date(localeIsoString);
  }
}
