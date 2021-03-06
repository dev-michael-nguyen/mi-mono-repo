import { NativeDateAdapter } from './native-date-adapter';

describe('native-date-adapter', () => {
  it('toDate() should handle null value', () => {
    // arrange
    const value = null;

    // act
    const actualDateObj = NativeDateAdapter.toDate(value);

    // assert
    expect(actualDateObj).toBeNull();
  });

  it('toDate() should handle Date js', () => {
    // arrange
    const value = new Date();

    // act
    const actualDateObj = NativeDateAdapter.toDate(value);

    // assert
    expect(actualDateObj).toStrictEqual(value);
  });

  it('toDate() should handle mm/dd/yyyy string', () => {
    // arrange
    const value = '03/06/2021';

    // act
    const actualDateObj = NativeDateAdapter.toDate(value);

    // assert
    expect(actualDateObj.toISOString()).toBe('2021-03-06T05:00:00.000Z');
  });

  it('toDate() should handle yyyy-mm-ddT00:00:00.000Z ISO string', () => {
    // arrange
    const value = '2021-03-06T00:00:00.000Z';

    // act
    const actualDateObj = NativeDateAdapter.toDate(value);

    // assert
    expect(actualDateObj.toISOString()).toBe('2021-03-06T00:00:00.000Z');
  });
});
