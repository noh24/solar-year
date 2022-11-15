/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'space-pattern': "url('./../assets/images/cartoon-space-bg.jpg')"
      }
    },
  },
  plugins: [],
}
