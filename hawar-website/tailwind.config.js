/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Custom breakpoint for landscape phone or smaller devices
      'landscape': {'raw': '(max-width: 767px)'},
    },
  
    theme: {
      extend: {},
    },
    plugins: [],
  };
  