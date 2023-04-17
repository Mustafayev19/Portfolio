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
      },
      fontSize: {
        xs:'0.4rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
}

