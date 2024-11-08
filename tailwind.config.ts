import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
    },
    colors: {
      "primary-dark": "#111317",
      "secondary-dark": "#1f2125",
      "dark-gray": "#35373b",
      "primary-orange": "#f9ac54",
      "secondary-orange": "#d79447",
      "light-gray": "#d1d5db",
      white: "#ffffff",
    },
    animation: {
      slideUp: "slideUp 600ms ease forwards",
      slideUp2: "slideUp2 1100ms ease forwards",
      slideUpBenefits: "slideUpBenefits 600ms ease forwards",
    },
    keyframes: {
      slideUp: {
        "0%": { opacity: "0", transform: "translateY(15rem)" },
        "100%": { opacity: "1", transform: "translateY(0rem)" },
      },
      slideUp2: {
        "0%": { opacity: "0", transform: "translateY(15rem)" },
        "100%": { opacity: "1", transform: "translateY(0rem)" },
      },
      slideUpBenefits: {
        "0%": { opacity: "0", transform: "translateY(10rem)" },
        "100%": { opacity: "1", transform: "translateY(0rem)" },
      },
    },
  },
  plugins: [],
} satisfies Config;
