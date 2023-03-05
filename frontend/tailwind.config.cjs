/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: {
          900: "hsl(0, 0%, 2%)",
          600: "hsl(0, 0%, 12%)",
          500: "hsl(0, 0%, 18%)",
          400: "hsl(0, 0%, 23%)",
        },
        ["light-grey"]: {
          900: "hsl(0, 0%, 51%)",
          500: "hsl(0,0%, 91%)",
          400: "hsl(0,0%,96%)",
          300: "hsl(0, 0%, 2%)",
        },
        secondary: "hsl(274, 82%, 60%)",
        error: "hsl(0, 100%, 66%)",
      },
      fontFamily: {
        sans: "'Inter', sans-serif",
        serif: "",
        mono: "",
      },
    },
  },
  plugins: [],
};
