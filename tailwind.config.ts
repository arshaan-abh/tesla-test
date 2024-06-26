import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        yekan: ["var(--font-yekan)", ...fontFamily.sans],
      },
      colors: {
        "tesla-neutral": {
          50: "#F9F9F9",
          100: "#F3F3F3",
          300: "#C8C8C8",
          400: "#B0B0B0",
          800: "#2F2F2F",
          900: "#292D32",
        },
        "tesla-amber": { 400: "#FCBC3A" },
        "tesla-green": { 600: "#00B31D" },
        "tesla-blue": { 500: "#168FDF" },
        "tesla-rose": { 500: "#ED303D", 600: "#ED2E7E" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
