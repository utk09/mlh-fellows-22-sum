/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["night"],
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("daisyui")],
};
