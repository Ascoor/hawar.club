import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper'],
  },
  server: {
    open: true, // يفتح المتصفح تلقائيًا عند تشغيل dev server
    port: 3000, // تعيين منفذ الخادم المحلي
  },
  build: {
    outDir: 'dist', // تحديد مجلد الإخراج
    sourcemap: mode === 'development', // الخرائط المصدرية للتطوير فقط
    minify: 'terser', // ضغط الملفات
    terserOptions: {
      compress: {
        drop_console: true, // إزالة console.log في الإنتاج
        drop_debugger: true, // إزالة debugger
      },
    },
  },
  // base: mode === 'production' ? '/sub-path/' : '/', // قم بتحديث المسار بناءً على بيئة الإنتاج
}));
