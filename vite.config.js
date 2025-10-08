import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: resolve(__dirname, 'public'),
  server: {
    port: 6161,
  },
  preview: {
    port: 6666,
    strictPort: true,
  },
  test: {
    setupFiles: ['node_modules/@testing-library/jest-dom/vitest'],
    dir: './src/tests/',
    environment: 'jsdom',
    globals: true,
    // if you have few tests, try commenting this
    // out to improve performance:
    // isolate: false,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src'),
    },
    conditions: ['development', 'browser'],
  },
});
