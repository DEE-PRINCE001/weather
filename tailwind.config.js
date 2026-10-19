/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DMSans", "sans-serif"],   
        bc: ["Bricolage", "sans-serif"],
      },
    },
  },
  plugins: [],
};