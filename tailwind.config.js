/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
    },
    fontFamily: {
      primary: "Poppins",
      secondary: "Pacifico",
    },
  },
  plugins: [],
};
