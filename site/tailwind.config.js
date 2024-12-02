/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom breakpoints (you can modify existing ones as well)
      screens: {
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra-large screens
        '2xl': '1536px', // Ultra-large screens
      },
      
      // Adding custom background images for responsiveness
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(43, 108, 176, 0.3)), url('assets/img-1.jpg')",
        'service-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(43, 108, 176, 0.9)), url('assets/img-5.jpg')",
        'gallery-pattern1': "url('assets/gym/gym-team.jpg')",
        'gallery-pattern2': "url('assets/gym/gym-main.png')",
        'gallery-pattern3': "url('assets/gym/gym-teams2.jpg')",
        'gallery-pattern4': "url('assets/gym/gym-tool-1.jpg')",
        'gallery-pattern5': "url('assets/gym/gym-news-1.jpg')",
        'footer-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url('assets/img-18.jpg')",
        'hawar-blue': 'linear-gradient(to right, #000428 0%, #004e92 51%, #000428 100%)', // Add hawar-blue as a background image
        'sky-blue': 'linear-gradient(to right, #56ccf2, #2f80ed)', // Bright sky blue gradient
        'deep-blue': 'linear-gradient(to right, #1e3c72, #2a5298)', // Deep ocean blue
        'azure': 'linear-gradient(to right, #0072ff, #00c6ff)', // Azure blue gradient
        'night-sky-blue': 'linear-gradient(to right, #1e1e1e, #3a3a3a)', // Darker sky blue gradient
        'teal-blue': 'linear-gradient(to right, #00c6ff, #0072ff)', // Teal with a hint of blue gradient
      },

      // Responsive utilities for font sizes, padding, margins, etc.
      fontSize: {
        'sm': '14px',
        'md': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
      },

      // Custom spacing for padding, margin, etc. at specific breakpoints
      spacing: {
        '8': '2rem', // Example spacing
        '16': '4rem',
        '24': '6rem',
      },
      },
      },

    
  plugins: [],
}
