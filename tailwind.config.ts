import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-coolvetica)",
        meditative: "var(--font-meditative)",
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
