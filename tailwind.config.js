const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          amiri: ['Amiri', 'serif'],
          tharwat: ['Tharwat', 'sans-serif'],
          tajawal: ['Tajawal', 'sans-serif'],
        },
      },
      
      borderRadius: {
        card: '40px',
        header: '80px',
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
          light: '#396dcc',
          DEFAULT: '#0c3066',
          dark: '#1b2b5a',
          darker: '#031023',
        },
        'hawar-orange': {
          DEFAULT: '#fb9221',
          dark: '#fb7921',
          light: '#ffa726',
        },
        'hawar-terq': {
          DEFAULT: '#3BAEA6',
          light: '#A3DDCF',
          dark: '#1A736A',
        },
      },
      spacing: {
        '70px': '70px',
      },
      fontSize: {
        xxs: '0.7rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',

        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      boxShadow: {
        custom: '0 4px 6px 5px rgba(0, 0, 0, 0.1)',
        'soft-orange': '0 4px 6px rgba(251, 146, 33, 0.5)',
        'dark-blue': '0 4px 10px rgba(0, 0, 139, 0.6)',
        'red-glow': '0 0 10px rgba(255, 0, 0, 0.5)',
        'blue-glow': '0 0 15px rgba(0, 0, 255, 0.4)',
        'led-orange': '0 0 20px rgba(251, 146, 33, 0.8)',
        'orange-glow': '0 0 30px rgba(251, 146, 33, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // الحركات (Keyframes)
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '50%': {
            transform: 'translateX(-10%) translateY(15px) rotate(180deg)',
          },
          '100%': { transform: 'translateX(0) translateY(0) rotate(360deg)' },
        },
        borderGlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(251, 146, 33, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(251, 146, 33, 0.8)' },
        },
        lightSweep: {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },

      // الحركات (Animation)
      animation: {
        'light-border': 'borderGlow 5s linear infinite',
        lightSweep: 'lightSweep 3s linear infinite',
        wave: 'wave 10s infinite linear',
        pulse: 'pulse 3s infinite',
        glow: 'glow 2s infinite alternate',
      },
    },

    // الشاشات (Responsive Breakpoints)
    screens: {
      xs: '300px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Tharwat',
            src: "url('./assets/fonts/TharwatOmaraa.ttf') format('truetype')",
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          {
            fontFamily: 'Amiri',
            src: "url('./assets/fonts/Amiri/Amiri-Regular.ttf') format('truetype')",
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          {
            fontFamily: 'Amiri',
            src: "url('./assets/fonts/Amiri/Amiri-Bold.ttf') format('truetype')",
            fontWeight: 'bold',
            fontStyle: 'normal',
          },
          {
            fontFamily: 'Amiri',
            src: "url('./assets/fonts/Amiri/Amiri-Italic.ttf') format('truetype')",
            fontWeight: 'normal',
            fontStyle: 'italic',
          },
          {
            fontFamily: 'Amiri',
            src: "url('./assets/fonts/Amiri/Amiri-BoldItalic.ttf') format('truetype')",
            fontWeight: 'bold',
            fontStyle: 'italic',
          },
        ],
      });
    }),
  ],
};
