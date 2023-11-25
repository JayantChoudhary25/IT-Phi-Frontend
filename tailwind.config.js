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
      primary: "#49b5e7;",
      secondary:"#000"
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        // sm: '2rem',
        lg: '1.5rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
    },
    extend: {},
},
  plugins: [],
}
