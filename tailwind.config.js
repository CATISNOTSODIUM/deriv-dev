/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#CAB86E ",
        primarySubTitle: "#CBAF4C  ",
        primaryBase: "white",
        primaryBackground: "black",
      }
    },
  },
  plugins: [],
}

