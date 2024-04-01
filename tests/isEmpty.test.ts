import isEmpty from '../src/functions/isEmpty';

describe('isEmpty', () => {
  test('Array is empty', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('Array is not empty', () => {
    expect(isEmpty([1, 2, 3, 4, 5])).toBe(false);
  });
});
