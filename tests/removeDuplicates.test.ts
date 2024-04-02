import { describe, expect, it } from 'vitest';
import removeDuplicates from '../src/functions/removeDuplicates';

describe('removeDuplicates', () => {
  it('should return [1, 2, 3] for [1, 1, 2, 3, 3, 1, 2]', () => {
    const arr = [1, 1, 2, 3, 3, 1, 2];

    const result = removeDuplicates(arr);

    expect(result).toEqual([1, 2, 3]);
  });
});
