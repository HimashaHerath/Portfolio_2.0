import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: './',
  },
  base: process.env.NODE_ENV === 'production' ? '/Portfolio_2.0/' : '/',
  publicDir: 'public',
});
