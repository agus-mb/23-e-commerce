/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
'violent-pink':'#aa4b6b',
'violent-blue':'#6b6b83',
'light-blue':'#3b8d99',
      }
    },
  },
  plugins: [],
}

