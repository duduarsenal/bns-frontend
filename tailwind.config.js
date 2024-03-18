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
        'hover-dark-green': '#2a5e4c',
        'brand-regular-green': '#4C9773',
        'hover-regular-green': '#356a51',
        'brand-light-green': '#b8c9c3',
        'hover-light-green': '#93a19c',
        'brand-white': '#fdfff8',
        'hover-white': '#caccc6',
        'brand-yellow-white': '#F7FEDD',
        'hover-yellow-white': '#c6cbb1'
      }
    },
  },
  plugins: [],
}