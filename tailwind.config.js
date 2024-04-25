/** @type {import('tailwindcss').Config} */
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
  },
  plugins: [],
}

