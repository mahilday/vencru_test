/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        vencru_gray: "#344054",
        vencru_bg_dark: "#F9FAFB",
        vencru_purple:"#6941C6",
      }
    },
  },
  plugins: [],
}
