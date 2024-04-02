import { describe, expect, it } from 'vitest';
import isPalindrome from '../src/functions/isPalindrome';

describe('isPalindrome', () => {
  it('should return true for racecar', () => {
    const string = 'racecar';

    const result = isPalindrome(string);

    expect(result).toBe(true);
  });

  it('should return false for chocolate', () => {
    const string = 'chocolate';

    const result = isPalindrome(string);

    expect(result).toBe(false);
  });
});
