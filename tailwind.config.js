/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: "slide 1s ease-in-out",
      },

      // that is actual animation
      keyframes: {
        slide: {
          "0%": { transform: "translate(0px, 50px)", opacity: "0" },
          "100%": { transform: "translate(0px, 0px)", opacity: "1" },
        },
      },
    },
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
