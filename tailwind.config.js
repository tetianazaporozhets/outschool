/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-pink": "rgb(255, 68, 221)",
        "custom-hover-pink": "rgb(225, 44, 193, 1)",
        "custom-hover-blue": "rgb(96, 40, 211, 1)",
        "accent-color": "#5027B5",
        "custom-bg-dark": "#1B1B1B",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    // container: {
    //   padding: "40px",
    // },
    container: {
      center: true,
    },
  },
  plugins: [],
};
