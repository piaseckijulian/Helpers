import truncate from '../src/functions/truncate';

describe('truncate', () => {
  test('Hello World truncated with max 8 chars is: Hello Wo...', () => {
    expect(truncate('Hello World', 8)).toBe('Hello Wo...');
  });
});
