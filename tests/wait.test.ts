import { describe, expect, it } from 'vitest';
import wait from '../src/functions/wait';

describe('wait', () => {
  it('should resolve after the specified time', async () => {
    const start = Date.now();
    const delay = 1000; // 1 second

    await wait(delay);

    const end = Date.now();

    const result = end - start;

    expect(result).toBeGreaterThanOrEqual(delay);
    expect(result).toBeLessThan(delay + 50); // Allow a small margin of error for the timing
  });

  it('should resolve immediately if 0 ms is specified', async () => {
    const start = Date.now();
    const delay = 0;

    await wait(delay);

    const end = Date.now();

    const result = end - start;

    expect(result).toBeLessThan(50); // Allow a small margin of error for the timing
  });
});
