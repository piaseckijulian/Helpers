import { describe, expect, it } from 'vitest';
import getRandomItem from '../src/functions/getRandomItem';

describe('getRandomItem', () => {
  it('should return an item from the array', () => {
    const arr = [1, 2, 3, 4, 5];

    const result = getRandomItem(arr);

    expect(arr).toContain(result);
  });

  it('should handle an empty array', () => {
    const arr: number[] = [];

    const result = getRandomItem(arr);

    expect(result).toBeUndefined();
  });
});
