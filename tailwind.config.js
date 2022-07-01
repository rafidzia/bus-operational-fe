/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "dodgerblue",
        chart:{
          1:'#1DABB8',
          2:'#EB6361'
        }
      },
    },
  },
  plugins: [],
}
