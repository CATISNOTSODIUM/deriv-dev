/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#CAB86E ",
        primarySubTitle: "#CBAF4C  ",
        primaryBase: "white",
        primaryBackground: "#242424",
        secondaryBackground:"#1f1f1f",
      }
    },
    fontFamily: {
      Quicksand: ['"Quicksand"', "sans-serif"],
      MonoDisplay: ['"Major Mono Display"', "mono"],
    }
  },
  plugins: [],
}

