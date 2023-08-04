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
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        headline: "slide 4s infinite linear",
      },
    },
  },
  plugins: [],
};
