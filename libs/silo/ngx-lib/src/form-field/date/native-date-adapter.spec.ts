import { NativeDateAdapter } from './native-date-adapter';

describe('native-date-adapter', () => {
  it('toDate() should handle null value', () => {
    const theories = [{ value: null }, { value: undefined }, { value: '' }];
    theories.forEach((t) => {
      const actualDateObj = NativeDateAdapter.toDate(t.value);
      expect(actualDateObj).toBeNull();
    });
  });

  it('toDate() should throw error for invalid value', () => {
    const theories = [{ value: 'invalid' }, { value: new Date('invalid') }];
    theories.forEach((t) => {
      expect(() => NativeDateAdapter.toDate(t.value)).toThrow();
    });
  });

  it('toDate() should handle mm/dd/yyyy string', () => {
    const theories = [
      { value: '03/06/2021', expected: '2021-03-06T05:00:00.000Z' },
    ];
    theories.forEach((t) => {
      const actualDateObj = NativeDateAdapter.toDate(t.value);
      expect(actualDateObj.toJSON()).toBe(t.expected);
    });
  });

  it('toDate() should handle yyyy-mm-ddT00:00:00.000Z ISO string', () => {
    const theories = [
      {
        value: '2021-03-06',
        expected: '2021-03-06T00:00:00.000Z',
      },
      {
        value: '2021-03-06T00:00:00.000Z',
        expected: '2021-03-06T00:00:00.000Z',
      },
      {
        value: '2021-03-06T05:00:00.000Z',
        expected: '2021-03-06T05:00:00.000Z',
      },
      {
        value: '2021-03-06T05:20:19.000Z',
        expected: '2021-03-06T05:20:19.000Z',
      },
    ];
    theories.forEach((t) => {
      const actualDateObj = NativeDateAdapter.toDate(t.value);
      expect(actualDateObj.toJSON()).toBe(t.expected);
    });
  });

  it('toDate() should handle Date js', () => {
    const now = new Date();
    const theories = [
      {
        value: now,
        expected: now.toJSON(),
      },
      {
        value: new Date('03/06/2021'),
        expected: '2021-03-06T05:00:00.000Z',
      },
      {
        value: new Date('2021-03-06'),
        expected: '2021-03-06T00:00:00.000Z',
      },
      {
        value: new Date('2021-03-06T00:00:00.000Z'),
        expected: '2021-03-06T00:00:00.000Z',
      },
      {
        value: new Date('2021-03-06T05:00:00.000Z'),
        expected: '2021-03-06T05:00:00.000Z',
      },
    ];
    theories.forEach((t) => {
      const actualDateObj = NativeDateAdapter.toDate(t.value);
      expect(actualDateObj.toJSON()).toBe(t.expected);
    });
  });

  it('toLocaleDateFromZeroHourUtc() should handle null value', () => {
    const theories = [{ value: null }, { value: undefined }, { value: '' }];
    theories.forEach((t) => {
      const actualDateObj = NativeDateAdapter.toLocaleDateFromZeroHourUtc(
        t.value,
      );
      expect(actualDateObj).toBeNull();
    });
  });

  it('toLocaleDateFromZeroHourUtc() should throw error for invalid value', () => {
    const theories = [
      { value: 'invalid' },
      { value: '2021-03-06' },
      { value: '2021-03-06T05:00:00.000Z' },
    ];
    theories.forEach((t) => {
      expect(() =>
        NativeDateAdapter.toLocaleDateFromZeroHourUtc(t.value),
      ).toThrow();
    });
  });

  it('toLocaleDateFromZeroHourUtc() should handle yyyy-mm-ddT00:00:00.000Z ISO string', () => {
    const theories = [
      {
        value: '2021-03-06T00:00:00.000Z',
        expected: new Date('03/06/2021').toJSON(),
      },
    ];
    theories.forEach((t) => {
      const actualDateObj = NativeDateAdapter.toLocaleDateFromZeroHourUtc(
        t.value,
      );
      expect(actualDateObj.toJSON()).toBe(t.expected);
    });
  });
});
