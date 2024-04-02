import { describe, expect, it } from 'vitest';
import capitalize from '../src/functions/capitalize';

describe('capitalize', () => {
  it('should return John dOe for john dOe', () => {
    const string = 'john dOe';

    const result = capitalize(string);

    expect(result).toBe('John dOe');
  });
});
