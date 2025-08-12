import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/ridanntradingco/' : '/', // ✅ Fix asset paths for GitHub Pages
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 2000,
  },
  plugins: [
    tsconfigPaths(),
    react(),

    // ✅ Auto-create 404.html for GitHub Pages route fallback
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '.', // Copy to dist root as 404.html
          rename: '404.html'
        }
      ]
    })
  ]
}));
