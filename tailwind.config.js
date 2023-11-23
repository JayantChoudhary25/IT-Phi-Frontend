/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
        oswald: "Oswald, sans-serif",
        urbanist: "Urbanist, sans-serif",
        redHatDisplay : 'Red Hat Display'
    },
    colors: {
      ...colors,
    },
    extend: {},
},
  plugins: [],
}
