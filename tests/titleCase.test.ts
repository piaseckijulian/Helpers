import { describe, expect, it } from 'vitest';
import titleCase from '../src/functions/titleCase';

describe('titleCase', () => {
  it('should return Lorem Ipsum Dolor Sit Amet for lorem ipsum dolor sit amet', () => {
    const sentence = 'lorem ipsum dolor sit amet';

    const result = titleCase(sentence);

    expect(result).toBe('Lorem Ipsum Dolor Sit Amet');
  });
});
