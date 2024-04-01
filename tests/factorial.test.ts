import factorial from '../src/functions/factorial';

describe('factorial', () => {
  test('Factorial of 1 is equal: 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('Factorial of 10 is equal: 3.628.800', () => {
    expect(factorial(10)).toBe(3_628_800);
  });
});
