import { describe, expect, it } from 'vitest';
import sortBy from '../src/functions/sortBy';

describe('sortBy', () => {
  it('should sort arr by age field in ascending order', () => {
    const arr = [
      { id: 2, name: 'Adam', age: 35 },
      { id: 3, name: 'Robert', age: 40 },
      { id: 1, name: 'John', age: 20 }
    ];
    const key = 'age';

    const result = sortBy(arr, key);

    expect(result).toEqual([
      { id: 1, name: 'John', age: 20 },
      { id: 2, name: 'Adam', age: 35 },
      { id: 3, name: 'Robert', age: 40 }
    ]);
  });

  it('should return same object if all values are the same', () => {
    const arr = [
      { id: 2, name: 'Adam', age: 20 },
      { id: 3, name: 'Robert', age: 20 },
      { id: 1, name: 'John', age: 20 }
    ];
    const key = 'age';

    const result = sortBy(arr, key);

    expect(result).toEqual([
      { id: 2, name: 'Adam', age: 20 },
      { id: 3, name: 'Robert', age: 20 },
      { id: 1, name: 'John', age: 20 }
    ]);
  });
});
