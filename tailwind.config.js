/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customLightBlue: '#dfe4ff',
        customYellow: '#FFFCDF',
        customPink: '#FFDFDF',
        customgreen: '#6CF0B9',
        customblue:'#17B5E7',
        customgreen: '#27EDB2',
        customgray:'#EBF3EE'
      },
    },
  },
  plugins: [],
}