/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "brilliant-serif": ["brilliant-serif"],
        "brilliant-sans-serif": ["brilliant-sans-serif"],
      },
    },
  },
  plugins: [],
};
