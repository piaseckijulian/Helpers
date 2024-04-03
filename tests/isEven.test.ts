import { describe, expect, it } from 'vitest';
import isEven from '../src/functions/isEven';

describe('isEven', () => {
  it('should return true for 2', () => {
    const n = 2;

    const result = isEven(n);

    expect(result).toBe(true);
  });

  it('should return false for 3', () => {
    const n = 3;

    const result = isEven(n);

    expect(result).toBe(false);
  });
});
