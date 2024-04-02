import { describe, expect, it } from 'vitest';
import truncate from '../src/functions/truncate';

describe('truncate', () => {
  it('should return Hello World for Hello World, 15', () => {
    const string = 'Hello World';
    const maxLength = 15;

    const result = truncate(string, maxLength);

    expect(result).toBe('Hello World');
  });

  it('should return Hello Wo... for Hello World, 8', () => {
    const string = 'Hello World';
    const maxLength = 8;

    const result = truncate(string, maxLength);

    expect(result).toBe('Hello Wo...');
  });
});
