import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Loro Piana palette - Maison California
        ivory: {
          DEFAULT: "#F3EEE6",
          50: "#FBF9F6",
          100: "#F7F3ED",
          200: "#EFE7DA"
        },
        sienna: {
          DEFAULT: "#9C8066",
          600: "#8B715A",
          700: "#7D6A55"
        },
        clay: { DEFAULT: "#7D6A55" },
        ecru: { DEFAULT: "#EAE1D2" },
        basalt: { DEFAULT: "#2E2B28" },
        nickel: { DEFAULT: "#BBAE9B" },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      letterSpacing: {
        wide2: ".06em",
        micro: ".01em"
      },
      boxShadow: {
        lintel: "0 1px 0 rgba(0,0,0,0.04), 0 10px 30px rgba(60,58,54,0.06)",
        emboss: "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.08)",
      },
      borderRadius: {
        lg2: "16px"
      },
      maxWidth: {
        prose: "72ch"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
};

export default config;
