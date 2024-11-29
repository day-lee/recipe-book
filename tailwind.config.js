/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [],
        custom: ["Montserrat", "serif"],
      },
      colors: {
        lightGrey: "#f4f7fa",
      },
    },
  },
  plugins: [],
};
