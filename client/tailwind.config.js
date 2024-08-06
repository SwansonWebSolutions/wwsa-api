/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-green': ' #00A67E',
        'subtle-blue': '#003366',
        'warm-coral': '#FF6F61',
      },
      keyframes: {
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(50%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInBorder: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1},
        }
      },
      animation: {
        slideInRight: 'slideInRight 1s ease-out forwards',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        fadeInBorder: 'fadeInBorder 1s ease-out forwards 0s',
        fade: 'fadeIn 1s ease-out forwards',
      },
      textShadow: {
        'black': '2px 10px 10px rgba(0, 0, 0, 0.75)',
      },
      boxShadow : {
        'black': '2px 10px 10px rgba(0, 0, 0, 0.75)',
        'full-black': '35px 35px 10px -5px rgba(0, 0, 0)',
      }
    },
  },
  plugins: [],
}