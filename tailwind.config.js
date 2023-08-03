/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackC: "#272829",
        whiteC: "#FFF6E0",
        midA: "#61677A",
        midB: "#D8D9DA",
      },
    },
  },
  plugins: [],
};
