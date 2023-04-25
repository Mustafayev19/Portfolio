/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {

      'sms':'460px',
      
      'sm': '640px',

      'md': '768px',

      'mds':'820px',

      'mdx':'960px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px'

    },
    extend: {
      fontFamily: {
        mainFont: ['Gemunu Libre'],
        secondFont: ['Kanit', 'sans-serif']
      },
      colors: {
        'colorform':'#394867',
        'blue1': '#0b132bff',
        'blue2': '#1c2541ff',
        'blue3': '#3a506bff',
        'green1': '#5bc0beff',
        'green2': '#6fffe9ff',
        'white1': '#fbfffe'
      },
      fontSize: {
        xs: '0.3rem',
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

