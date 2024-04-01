import insert from '../src/functions/insert';

describe('insert', () => {
  const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];

  test('Array of numbers after inserting 5 at the index 4 is: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    expect(insert(numbers, 4, 5)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
