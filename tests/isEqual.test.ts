import { describe, expect, it } from 'vitest';
import isEqual from '../src/functions/isEqual';

describe('isEqual', () => {
  it('should return true for [1, 2, 3], [1, 2, 3]', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    const result = isEqual(arr1, arr2);

    expect(result).toBe(true);
  });

  it('should return false for [1, 2, 3], [3, 2, 1]', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];

    const result = isEqual(arr1, arr2);

    expect(result).toBe(false);
  });
});
