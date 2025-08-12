import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/ridanntradingco/', 
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 2000,
  },
  plugins: [
    tsconfigPaths(),
    react(),
  ],
});
