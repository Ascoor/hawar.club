import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),

    sitemap({
      hostname: 'https://hawar.club',
      routes: [
        { path: '/', lastmod: new Date().toISOString() },
        { path: '/about', lastmod: new Date().toISOString() },
        { path: '/sports', lastmod: new Date().toISOString() },
      ],
    }),
  ],

  base: mode === 'gh-pages' ? '/hawar.club/' : '/',
  assetsInclude: ['**/*.ttf'],
  optimizeDeps: {
    include: ['swiper'],
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: true,
  },
}));
