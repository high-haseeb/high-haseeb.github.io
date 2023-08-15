/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        6: "6px",
      },
      fontFamily: {
        open: "var(--font-open-sans)",
        inter: "var(--font-inter)",
      },
      colors: {
        blackC: "black",
        whiteC: "#f5f5f5",
        gold: "#e9b21a",
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
