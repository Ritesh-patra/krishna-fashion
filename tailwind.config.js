/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./*.html",
  "./src/**/*.{html,js}" // ✅ src folder ke andar ke files
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#471396',
        'brand-pink': '#B13BFF',
        'brand-accent': '#FFCC00',
        'brand-dark': '#090040',
      },
    },
  },
  plugins: [],
};
