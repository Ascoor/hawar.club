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
          cairo: ['Cairo', 'sans-serif'],
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
        '2xl': '1.3rem',
        '3xl': '1.5rem',
        '4xl': '2.0rem',
        '5xl': '2.5rem',

        '6xl': '3.0rem',
        '7xl': '3.5rem',
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
        fadeInSlide: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
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
        fadeInSlide: 'fadeInSlide 0.5s ease-out',
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
          // Cairo Font - Arabic Unicode Range
          {
            fontFamily: 'Cairo',
            fontStyle: 'normal',
            fontWeight: '400',
            fontDisplay: 'swap',
            src: `url(https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hOA-a1biLD-H.woff2) format('woff2')`,
            unicodeRange:
              'U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EC2-10EC4, U+10EFC-10EFF, U+1EE00-1EE03, U+1EE05-1EE1F, U+1EE21-1EE22, U+1EE24, U+1EE27, U+1EE29-1EE32, U+1EE34-1EE37, U+1EE39, U+1EE3B, U+1EE42, U+1EE47, U+1EE49, U+1EE4B, U+1EE4D-1EE4F, U+1EE51-1EE52, U+1EE54, U+1EE57, U+1EE59, U+1EE5B, U+1EE5D, U+1EE5F, U+1EE61-1EE62, U+1EE64, U+1EE67-1EE6A, U+1EE6C-1EE72, U+1EE74-1EE77, U+1EE79-1EE7C, U+1EE7E, U+1EE80-1EE89, U+1EE8B-1EE9B, U+1EEA1-1EEA3, U+1EEA5-1EEA9, U+1EEAB-1EEBB, U+1EEF0-1EEF1',
          },
          // Cairo Font - Extended Unicode Range
          {
            fontFamily: 'Cairo',
            fontStyle: 'normal',
            fontWeight: '400',
            fontDisplay: 'swap',
            src: `url(https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hOA-a13iLD-H.woff2) format('woff2')`,
            unicodeRange:
              'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF',
          },
          // Cairo Font - Basic Latin Unicode Range
          {
            fontFamily: 'Cairo',
            fontStyle: 'normal',
            fontWeight: '400',
            fontDisplay: 'swap',
            src: `url(https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hOA-a1PiLA.woff2) format('woff2')`,
            unicodeRange:
              'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
          },
          // Tharwat Font
          {
            fontFamily: 'Tharwat',
            fontStyle: 'normal',
            fontWeight: '400',
            src: `url('./assets/fonts/TharwatOmaraa.ttf') format('truetype')`,
          },
          // Amiri Fonts
          {
            fontFamily: 'Amiri',
            fontStyle: 'normal',
            fontWeight: '400',
            src: `url('./assets/fonts/Amiri/Amiri-Regular.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Amiri',
            fontStyle: 'normal',
            fontWeight: '700',
            src: `url('./assets/fonts/Amiri/Amiri-Bold.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Amiri',
            fontStyle: 'italic',
            fontWeight: '400',
            src: `url('./assets/fonts/Amiri/Amiri-Italic.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Amiri',
            fontStyle: 'italic',
            fontWeight: '700',
            src: `url('./assets/fonts/Amiri/Amiri-BoldItalic.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Tajawal',
            fontStyle: 'normal',
            fontWeight: '400',
            src: `url('./assets/fonts/Tajawal-Regular.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Tajawal',
            fontStyle: 'normal',
            fontWeight: '700',
            src: `url('./assets/fonts/Tajawal-Bold.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Tajawal',
            fontStyle: 'normal',
            fontWeight: '300',
            src: `url('./assets/fonts/Tajawal-Light.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Tajawal',
            fontStyle: 'normal',
            fontWeight: '500',
            src: `url('./assets/fonts/Tajawal-Medium.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Tajawal',
            fontStyle: 'normal',
            fontWeight: '800',
            src: `url('./assets/fonts/Tajawal-ExtraBold.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Tajawal',
            fontStyle: 'normal',
            fontWeight: '200',
            src: `url('./assets/fonts/Tajawal-ExtraLight.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Tajawal',
            fontStyle: 'normal',
            fontWeight: '900',
            src: `url('./assets/fonts/Tajawal-Black.ttf') format('truetype')`,
          },
        ],
      });
    }),
  ],
};
