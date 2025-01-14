/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F9F9FB",
        secondary: "#F3F6FF",
        heading: "#444753",
      },
      fontFamily: {
        serif: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
