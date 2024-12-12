/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hawar-blue': {
          light: '#5a6fd1',
          DEFAULT: '#2a3e76',
          dark: '#1b2b5a',
          darker: '#031023',
        },
        'hawar-orange': {
          DEFAULT: '#fb9221',
          dark: '#fb7921',
        },
        'hawar-terq': {
          DEFAULT: '#2FA8A1',
          light: '#A3DDDF',
          dark: '#1A7A75',
          darker: '#F2F2ED',
        },
      },
      spacing: {
        '70px': '70px',
      },
      fontSize: {
        '35px': '35px',
        '49px': '49px',
        '28px': '28px',
        '34px': '34px',
        '26px': '26px',
        '24px': '24px',
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'soft-orange': '0 4px 6px rgba(251, 146, 33, 0.5)', 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
      },
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
