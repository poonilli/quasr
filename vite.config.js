import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'public/popup.html'), // This is your UI!
      },
    },
    outDir: 'dist', // where Vite will build everything
    emptyOutDir: true
  }
});
