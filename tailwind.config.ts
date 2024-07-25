import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard"],
      },
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        button: "var(--button)",
        informative: "var(--informative)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
