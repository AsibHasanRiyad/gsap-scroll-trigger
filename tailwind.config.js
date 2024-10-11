/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28E855",
        secondary: "#0E100F",
        text: "#f6f7f7",
      },
    },
  },
  plugins: [],
};
