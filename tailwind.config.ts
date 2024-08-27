import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-coolvetica)",
        meditative: "var(--font-meditative)",
      },
      keyframes: {
        propeller: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        spin: {
          "0%": { transform: "scale(2.5) rotate(0deg)" },
          "100%": { transform: "scale(2.5) rotate(360deg)" },
        },
      },
      animation: {
        propeller: "propeller 1s linear infinite",
        slowSpin: "spin 20s linear infinite",
      },
      colors: {
        brBlack: "#0E100F",
        brWhite: "#FFFCE1",
      },
    },
  },
  plugins: [],
};
export default config;
