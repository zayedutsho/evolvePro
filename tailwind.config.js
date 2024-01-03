/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  color: {
    customColor: "#D4D6FB",
  },
  backgroundImage: {
    "custom-gradient": "linear-gradient(180deg, #36DAFE 0%, #129CE9 100%)",
  },
  plugins: [],
};
