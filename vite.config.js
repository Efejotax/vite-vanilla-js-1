import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
});
