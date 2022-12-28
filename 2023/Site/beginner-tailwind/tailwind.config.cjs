/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./**/*.{html,js}"],
  purge: ["./*.html"],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        'light-blue': colors.lightBlue
      }
    },
  },
  plugins: [],
}
