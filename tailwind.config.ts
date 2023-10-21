import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nord-0": "#2e3440",
        "nord-1": "#3b4252",
        "nord-2": "#434c5e",
        "nord-3": "#4c566a",
        "nord-4": "#d8dee9",
        "nord-5": "#e5e9f0",
        "nord-6": "#eceff4",
        "nord-7": "#8fbcbb",
        "nord-8": "#88c0d0",
        "nord-9": "#81a1c1",
        "nord-10": "#5e81ac",
        "nord-11": "#bf616a",
        "nord-12": "#d08770",
        "nord-13": "#ebcb8b",
        "nord-14": "#a3be8c",
        "nord-15": "#b48ead",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
