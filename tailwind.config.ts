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
        "bg-secondary": "#171717",
      },
      backgroundImage: {
        "gradient-cover": "radial-gradient(circle, rgba(32,32,58,1) 0%, rgba(23,23,23,1) 100%)"
      }
    },
  },
  plugins: [],
};
export default config;
