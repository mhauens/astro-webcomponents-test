import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true,
  },
  vite: {
    test: {
      include: ['test/**/*.test.ts'],
      environment: 'node',
    },
  },
});
