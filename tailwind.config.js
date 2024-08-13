/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pushToSide: {
         "0%" : { transform: "translateX(0px)"},
         "100%": { transform: "translateX(100vw)"}
        },
        fadeIn: {
          "0%": { opacity: 0, height: "0px" },
          "50%": { opacity: 0.5, height: "80px" },
          "100%": { opacity: 1, height: "auto" },
        },
        fadeOut: {
          "0%": { opacity: 1, height: "auto" },
          "50%": { opacity: 0.5, height: "30px" },
          "100%": { opacity: 0, height: "0px" },
        },
        breath: {
          "0%": { transform: "scale(1.05)" },
          "50%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        pushToSide: "pushToSide 0.1s forwards",
        fadeIn: "fadeIn 0.5s linear",
        fadeOut: "fadeOut .2s linear",
        breath: "breath 1s infinite forwards",
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
