import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'src/assets/fonts/*', dest: 'fonts' }, 
      ],
    }),
    sitemap({
      hostname: 'https://hawar.club',
      routes: [
        { path: '/', lastmod: new Date().toISOString() },
        { path: '/about', lastmod: new Date().toISOString() },
        { path: '/sports', lastmod: new Date().toISOString() },
      ],
    }),
  ],
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2'], 

  base: mode === 'gh-pages' ? '/hawar.club/' : '/',
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