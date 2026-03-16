/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bdayPink: "#FDEFEF",
        bdayChampagne: "#F7E7CE",
        bdayPurple: "#E0BBE4",
        bdayRose: "#D291BC",
        bdayDark: "#2B2D42",
        bdayWhite: "#FFFFFF"
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Paytone One', 'sans-serif'],
        script: ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}
