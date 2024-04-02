import { describe, expect, it } from 'vitest';
import validateEmail from '../src/functions/validateEmail';

describe('validateEmail', () => {
  it('should return true for valid email', () => {
    const email = 'hello@example.com';

    const result = validateEmail(email);

    expect(result).toBe(true);
  });

  it('should return false for not valid email', () => {
    const email = 'user_@_company.-';

    const result = validateEmail(email);

    expect(result).toBe(false);
  });
});
