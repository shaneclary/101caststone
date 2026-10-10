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
          700: "#76634E"
        },
        clay: { DEFAULT: "#76634E" },
        ecru: { DEFAULT: "#EAE1D2" },
        basalt: { DEFAULT: "#2E2B28" },
        nickel: { DEFAULT: "#BBAE9B" },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      // One typographic scale: display (page titles), title (section titles), heading
      // (sub-sections), lead (intros), body, small, caption and eyebrow (labels).
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        title: ["2.5rem", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        heading: ["1.5rem", { lineHeight: "1.25" }],
        lead: ["1.1875rem", { lineHeight: "1.65" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        small: ["0.9375rem", { lineHeight: "1.6" }],
        caption: ["0.8125rem", { lineHeight: "1.5" }],
        eyebrow: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.16em" }],
      },
      letterSpacing: {
        wide2: ".06em",
        micro: ".01em"
      },
      // One radius for images, cards, inputs and buttons; rounded-full stays for chips and icon buttons.
      borderRadius: {
        DEFAULT: "3px",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        // `translate` composes with the dialogs' -translate-x/y-1/2 centring (a transform).
        rise: { from: { opacity: "0", translate: "0 12px" }, to: { opacity: "1", translate: "0 0" } },
      },
      animation: {
        "fade-in": "fade-in .25s ease-out both",
        rise: "rise .7s cubic-bezier(.2,.7,.2,1) both",
      },
      maxWidth: {
        prose: "68ch"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
};

export default config;
