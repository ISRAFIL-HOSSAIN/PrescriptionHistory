/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Apps.{js,jsx,ts,tsx}",
    "./Apps/**/*.{js,jsx,ts,tsx}",
   
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
