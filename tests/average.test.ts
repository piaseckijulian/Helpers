import average from '../functions/average';

describe('average', () => {
  test('Average of 1, 2, 3, 4, 5 is equal: 3', () => {
    expect(average(1, 2, 3, 4, 5)).toBe(3);
  });

  test('Average of 3.5, 2, 5.25, 1.33 and 1.11111 is close to: 2.64', () => {
    expect(average(3.5, 2, 5.25, 1.33, 1.11111)).toBeCloseTo(2.64);
  });
});
