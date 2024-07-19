/** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3490dc',
          dark: '#2779bd',
        },
        background: {
          light: '#ffffff',
          dark: '#1a202c',
        },
        text: {
          light: '#2d3748',
          dark: '#e2e8f0',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
