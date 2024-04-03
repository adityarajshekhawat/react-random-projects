/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "red":"#FF0000",
          "black":"#000000",
          "pink":"#FF00EF",
          "purple":"#C600FF",
          "yellow":"#FFFF00",
          "brown":"#964B00",
          "grey":"#808080",
      },
    },
  },
  plugins: [],
};

