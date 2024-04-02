import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        '**/src/index.ts',
        '**/commitlint.config.js',
        '**/src/functions/index.ts',
        // Functions that cannot be tested
        '**/src/functions/wait.ts',
        '**/src/functions/copyToClipboard.ts',
        '**/src/functions/shuffle.ts',
        '**/src/functions/getRandomItem.ts'
      ],
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true
    }
  }
});
