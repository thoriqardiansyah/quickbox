/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primaryblue: "#2F80ED",
        primaryblack: "#4F4F4F",
        primarygray: "#828282",
        primarywhite: "#E0E0E0",
      },
    },
  },
  plugins: [],
};
