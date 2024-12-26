// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper'], // إذا كنت تستخدم مكتبات إضافية مثل Swiper
  },
  server: {
    port: 3000,  // إعداد المنفذ
    open: true,  // فتح المتصفح تلقائيًا عند بدء الخادم
  },
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: 'dist',  
    minify: 'esbuild',  // تحسين الكود لتقليل الحجم
    sourcemap: true,  // إنشاء خريطة المصادر
  },
});
