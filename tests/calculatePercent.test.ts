import { describe, expect, it } from 'vitest';
import calculatePercent from '../src/functions/calculatePercent';

describe('calculatePercent', () => {
  it('should return 50% for 250, 500', () => {
    const value = 250;
    const total = 500;

    const result = calculatePercent(value, total);

    expect(result).toBe(50);
  });

  it('should return 33% for 1, 3', () => {
    const value = 1;
    const total = 3;

    const result = calculatePercent(value, total);

    expect(result).toBe(33);
  });
});
