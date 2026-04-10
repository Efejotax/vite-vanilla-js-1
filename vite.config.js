import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  build: {
    sourcemap: true,
  },
});
