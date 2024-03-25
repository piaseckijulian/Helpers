import isEqual from '../functions/isEqual';

describe('isEqual', () => {
  test('Arrays are equal', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('Arrays are not equal', () => {
    expect(isEqual([3, 2, 1], [4, 5, 6])).toBe(false);
  });
});
