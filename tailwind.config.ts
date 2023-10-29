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
        bg1: "#fffefe",
        beige: "#a77e7e",
        lightGray: "#eeedef",
        gray: "#efeded",
      },
      transitionProperty: {
        height: "height",
        "max-height": "max-height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
export default config;
