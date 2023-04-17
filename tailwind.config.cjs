/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gloock': ['Gloock', 'serif'],
        'vollkorn': ['Vollkorn', 'serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      backgroundImage: {
        'shallow-depth-cover': "url(../images/shallow-depth-cover.jpeg)",
        'yellow-machines': "url(../images/yellow-machines.jpg)",
        'man-in-machine': "url(../images/man-in-machine.jpg)",
        'machine-by-ocean': "url(../images/machine-by-ocean.jpg)",
        'machine-on-grass': "url(../images/machine-on-grass.jpg)",
        'black-white-machine': "url(../images/black-white-machine.jpg)",
        'sky-over-machines': "url(../images/sky-over-machines.jpg)",
        'laundromat-pastel' : "url(../images/laundromat-pastel.png)",
        'laundromat-oil' : "url(../images/laundromat-oil.png)",
      }
    },
  },
  plugins: [],
}