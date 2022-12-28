/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        'sky': colors.sky
      }
    },
  },
  plugins: [],
}
