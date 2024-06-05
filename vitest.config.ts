import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        '**/src/index.ts',
        '**/commitlint.config.js',
        '**/src/functions/index.ts'
      ],
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true
    }
  }
});
