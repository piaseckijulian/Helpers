import isEven from '../src/functions/isEven';

describe('isEven', () => {
  test('2 is even', () => {
    expect(isEven(2)).toBe(true);
  });

  test('3 is not even', () => {
    expect(isEven(3)).toBe(false);
  });
});
