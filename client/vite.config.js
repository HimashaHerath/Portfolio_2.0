import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: './',
  },
  // Set base to '/' so assets are referenced from the root domain
  base: '/',
  publicDir: 'public',
});
