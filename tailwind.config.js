/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./@atlaskit/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./widgets/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
  important: true,
};
