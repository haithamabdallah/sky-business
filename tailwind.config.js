/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        futura: ["Futura PT Medium", "sans-serif"],
        futuraDemi: ["Futura PT Demi", "sans-serif"],
        futuraBook: ["Futura PT Book", "sans-serif"]
      },
    },
  },
  plugins: [],
};
