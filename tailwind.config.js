/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#676767",
        secondary: "#b3b3b3",
        tertiary: "#009cff",
        background: "#e3f4ff",
      },
    },
  },
  plugins: [],
};
