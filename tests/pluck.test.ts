import { describe, expect, it } from 'vitest';
import pluck from '../src/functions/pluck';

describe('pluck', () => {
  it('should return array of names', () => {
    const arr = [
      { id: 2, name: 'Adam', age: 35 },
      { id: 3, name: 'Robert', age: 40 },
      { id: 1, name: 'John', age: 20 }
    ];
    const key = 'name';

    const result = pluck(arr, key);

    expect(result).toEqual(['Adam', 'Robert', 'John']);
  });
});
