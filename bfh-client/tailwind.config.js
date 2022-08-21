/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        collingardemo: ["Collingardemo", "sans-serif"],
      }
    },
  },
  plugins: [],
}