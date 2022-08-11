/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: colors.teal,
      secondary: colors.blue,
      tertiary: colors.indigo,
      quaternary: colors.lime,
      quinary: colors.red,
      senary: colors.amber,
      light: colors.slate,
      dark: colors.gray,
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
