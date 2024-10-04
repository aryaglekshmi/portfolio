import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
        primary: "var(--font-jetbrainsMono)",     
    },
    extend: {
      colors: {
        black: "#0D0D0D",
        white: "#FFFFFF",
        light: "#F7F7F7",
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00FF99',
          hover: '#00e187',
        }
      },
    },
  },
  plugins: [],
};

export default config;
