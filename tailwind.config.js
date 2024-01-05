/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xxsm' : '320px',
        'xsm' : '425px',
        'xlg': '1440px'
      }
    },
  },
  plugins: [],
}