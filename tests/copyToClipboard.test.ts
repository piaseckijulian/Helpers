import { describe, expect, it, vi } from 'vitest';

// Mock clipboardy
vi.mock('clipboardy', () => {
  return {
    default: {
      writeSync: vi.fn()
    }
  };
});

import clipboardy from 'clipboardy';
import copyToClipboard from '../src/functions/copyToClipboard';

describe('copyToClipboard', () => {
  it('should call writeSync with the correct content', async () => {
    const content = 'Hello, World!';

    await copyToClipboard(content);

    expect(clipboardy.writeSync).toHaveBeenCalledWith(content);
  });

  it('should handle special characters', async () => {
    const content = 'Spécîål Chåråctęrs!';

    await copyToClipboard(content);

    expect(clipboardy.writeSync).toHaveBeenCalledWith(content);
  });
});
