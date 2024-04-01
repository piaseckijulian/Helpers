import removeDuplicates from '../src/functions/removeDuplicates';

describe('removeDuplicates', () => {
  test('[1, 1, 3, 5, 5, 1, 9] without duplicates is: [1, 3, 5, 9]', () => {
    expect(removeDuplicates([1, 1, 3, 5, 5, 1, 9])).toEqual([1, 3, 5, 9]);
  });
});
