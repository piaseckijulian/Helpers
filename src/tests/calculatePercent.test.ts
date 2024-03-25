import calculatePercent from '../functions/calculatePercent';

describe('calculatePercent', () => {
  test('10 is 10% of 100', () => {
    expect(calculatePercent(10, 100)).toBe(10);
  });

  test('1 is 33% of 3', () => {
    expect(calculatePercent(1, 3)).toBe(33);
  });
});
