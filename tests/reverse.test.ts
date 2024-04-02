import { describe, expect, it } from 'vitest';
import reverse from '../src/functions/reverse';

describe('reverse', () => {
  it('should return repaP for Paper', () => {
    const string = 'Paper';

    const result = reverse(string);

    expect(result).toBe('repaP');
  });
});
