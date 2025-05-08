/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"', 'sans-serif'],
      },
      colors: {
        Black: '#121212',
        DarkBlue: '#19202D',
        White: '#FFFFFF',
        Grey: {
          100: '#E7EAEE',
          200: '#CFCFCF',
          400: '#676D7E',
          500: '#48556A',
        },
        Purple: {
          50: '#EDE4FF',
          300: '#A775F1',
          500: '#733FC8',
        },
      },
    },
  },
  plugins: [],
}

