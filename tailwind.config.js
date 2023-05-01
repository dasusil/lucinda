/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cgreen': '#88b342',
        'cblack': '#0D1B1E',
        'cblue': '#7798AB',
        'cpink': '#F2CEE6',
        'cpeach': '#C9DDFF',
        
      }
    },
  },
  plugins: [],
}
