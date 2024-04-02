import { describe, expect, it } from 'vitest';
import insert from '../src/functions/insert';

describe('insert', () => {
  it('should return [1, 2, 3] for [1, 3], 1, 2', () => {
    const arr = [1, 3];
    const index = 1;
    const newItem = 2;

    const result = insert(arr, index, newItem);

    expect(result).toEqual([1, 2, 3]);
  });
});
