import { describe, expect, it } from 'vitest';
import average from '../src/functions/average';

describe('average', () => {
  it('should return 2 for 1, 2, 3', () => {
    const nums = [1, 2, 3];

    const result = average(...nums);

    expect(result).toBe(2);
  });

  it('should return 4.36 for 3.5, 1.25, 8.33', () => {
    const nums = [3.5, 1.25, 8.33];

    const result = average(...nums);

    expect(result).toBe(4.36);
  });
});
