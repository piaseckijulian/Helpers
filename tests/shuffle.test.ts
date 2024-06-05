import { describe, expect, it } from 'vitest';
import shuffle from '../src/functions/shuffle';

describe('shuffle', () => {
  it('should return an array with the same elements', () => {
    const arr = [1, 2, 3, 4, 5];

    const result = shuffle(arr);

    expect(result).toHaveLength(arr.length);
    expect(result.sort()).toEqual(arr.sort());
  });

  it('should handle an empty array', () => {
    const arr: number[] = [];

    const result = shuffle(arr);

    expect(result).toEqual([]);
  });
});
