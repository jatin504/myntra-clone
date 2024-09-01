/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add any other directories or files where Tailwind should look for class names
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
