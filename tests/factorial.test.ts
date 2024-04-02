import { describe, expect, it } from 'vitest';
import factorial from '../src/functions/factorial';

describe('factorial', () => {
  it('should return 1 for 1', () => {
    const n = 1;

    const result = factorial(n);

    expect(result).toBe(1);
  });

  it('should return 24 for 4', () => {
    const n = 4;

    const result = factorial(n);

    expect(result).toBe(24);
  });
});
