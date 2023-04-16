/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Manrope', 'sans-serif'],
        secondFont: ['DynaPuff', 'cursive']
      },
      colors: {
        'blue1': '#0b132bff',
        'blue2': '#1c2541ff',
        'blue3': '#3a506bff',
        'green1': '#5bc0beff',
        'green2': '#6fffe9ff',
        'white1': '#fbfffe'
      }
    },
  },
  plugins: [],
}

