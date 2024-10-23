/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'suit': ['SUIT', 'sans-serif'],
        'jejudoldam': ['EF_jejudoldam', 'sans-serif'],
      },
      colors: {
        'main': '#FFFAEB',
        'background': '#f5f5f5',
        'button': '#DBB185',
        'button-text': '#643300',
        'line' : '#6a6a6a',
      },
      borderRadius: {
        'normal-radius': '10px',
        'chips-radius': '25px',
      }
    },
  },
  plugins: [],
}