/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-green': '#124C38',
        'brand-regular-green': '#4C9773',
        'brand-light-green': '#b8c9c3',
        'brand-white': '#fdfff8',
        'brand-yellow-white': '#F7FEDD',
      }
    },
  },
  plugins: [],
}