import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/ridanntradingco/' : '/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 2000,
  },
  plugins: [
    tsconfigPaths(),
    react(),
  ],
});
