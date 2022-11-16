/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['"Rubik Moonrocks"', 'sans-serif'],
        'primary': ['"Josefin Sans"', 'sans-serif']
      },
      colors: {
        primary: "#1660E7"
      }
    },
  },
  plugins: [],
}
