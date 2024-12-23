/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // يمكن تسميتها كما تشاء:
        'arabic': ['Tajawal', 'sans-serif'],
        // أو لو لديك خط محلي:
        // 'arabic': ['TajawalLocal', 'sans-serif'],
      },
      borderRadius: {
        'card': '40px',
        'header': '80px',
        'card2': '20px',
      },
      colors: {
        'icon-color': {
          fb: '#355cff',
          link: '#2561c2',
          insta: '#ff1c8d',
          twitter: '#3297f0',
          tube: '#ff1a30',
        },
        'hawar-blue': {
          light: '#5a6fd1',
          DEFAULT: '#172554',
          dark: '#1b2b5a',
          darker: '#031023',
        },
        'hawar-orange': {
          DEFAULT: '#fb9221',
          dark: '#fb7921',
          light: '#ffa726', // لون فاتح للتدرج
        },
        'hawar-terq': {
          DEFAULT: '#3BAEA6', // زمردي متوسط
          light: '#A3DDCF', // زمردي فاتح
          dark: '#1A736A', // زمردي داكن
        },
      
      },
      spacing: {
        '70px': '70px',
      },
      fontSize: {
        'xxs': '0.7rem',    
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',   // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem',  // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem',// 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem',    // 48px
        // يمكنك إضافة ما تشاء مثل:
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem',  // 72px
      },
      boxShadow: {
        // الظلال المخصصة
        custom: '0 4px 6px 5px rgba(0, 0, 0, 0.1)', // ظل أسود خفيف
        'soft-orange': '0 4px 6px rgba(251, 146, 33, 0.5)', // ظل برتقالي ناعم
        'dark-blue': '0 4px 10px rgba(0, 0, 139, 0.6)', // ظل أزرق داكن
        'red-glow': '0 0 10px rgba(255, 0, 0, 0.5)', // توهج أحمر خفيف
        'blue-glow': '0 0 15px rgba(0, 0, 255, 0.4)', // توهج أزرق خفيف
        'led-orange': '0 0 20px rgba(251, 146, 33, 0.8)', // توهج برتقالي مميز
        'orange-glow': '0 0 30px rgba(251, 146, 33, 0.6)', // تظليل إضافي للتوهج البرتقالي
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateX(-10%) translateY(15px) rotate(180deg)' },
          '100%': { transform: 'translateX(0) translateY(0) rotate(360deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        waveSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        waveMedium: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        waveFast: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        pulseFast: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.3)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(251, 146, 33, 0.5)',
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(251, 146, 33, 0.8)',
          },
        },
      },
      animation: {
        waveSlow: 'waveSlow 55s linear infinite',
        waveMedium: 'waveMedium 50s linear infinite',
        waveFast: 'waveFast 45s linear infinite',
        wave: 'wave 10s infinite linear',
      
        pulseFast: 'pulseFast 2s infinite',
        glow: 'glow 2s infinite alternate',
        pulse: 'pulse 3s infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        // إضافة تأثير حركة الزر عند التمرير
        scrollUp: 'scrollUp 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
    },
    screens: {
      xs: '300px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
