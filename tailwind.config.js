/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      sm: { max: "767px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      space: ["Space Grotesk", "sans-serif"],
    },
  },
  plugins: [],
};
