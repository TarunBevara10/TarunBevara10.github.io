import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { light: "#f8fafc", dark: "#0b1220" },
        card: { light: "#ffffff", dark: "#0f172a" }
      }
    }
  },
  plugins: []
};
export default config;
