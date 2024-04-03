import { describe, expect, it } from 'vitest';
import isEmpty from '../src/functions/isEmpty';

describe('isEmpty', () => {
  it('should return true for []', () => {
    const arr = [];

    const result = isEmpty(arr);

    expect(result).toBe(true);
  });

  it('should return false for [1, 2, 3]', () => {
    const arr = [1, 2, 3];

    const result = isEmpty(arr);

    expect(result).toBe(false);
  });
});
