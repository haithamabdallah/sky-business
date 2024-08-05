/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        breath: {
          '0%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        fadeIn: "fadeIn .2s linear",
        breath: 'breath 1s infinite forwards',
      },
      colors: {},
      fontFamily: {
        futura: ["Futura PT Medium", "sans-serif"],
        futuraDemi: ["Futura PT Demi", "sans-serif"],
        futuraBook: ["Futura PT Book", "sans-serif"],
        futuraLight: ["Futura PT Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
