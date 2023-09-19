/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', "sans-serif"],
      },
      backgroundImage: theme => ({
        'img': "url('/Pictures/arka.jpg')"
      })
    },
    
  },
  plugins: [],
}
