import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,tsx}"],
  darkMode: ["class"],
  future: {
    hoverOnlyWhenSupported: true,
  },
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
      typography: {
        DEFAULT: {
          css: {
            "h1, h2, h3": {
              scrollMarginTop: "5rem",
            },
            "h1": {
              fontSize: "1.8rem",
              marginTop: "2em"
            },
            code: {
              counterReset: "line",
            },
            ":not(pre) > code": {
              fontWeight: "inherit",
              position: "relative",
              bottom: 1,
              margin: "0 3px",
              color: "#eb5757",
              backgroundColor: "rgba(135,131,120,0.15)",
              fontFamily:
                '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
              borderRadius: 3,
              padding: "0.2em 0.4em",
              overflowWrap: "break-word",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "code[data-line-numbers] > [data-line]::before": {
              counterIncrement: "line",
              content: "counter(line)",
              display: "inline-block",
              width: "1rem",
              marginRight: "1.4rem",
              textAlign: "right",
              color: "lightgrey",
              fontSize: "0.75rem",
            },
            'code[data-line-numbers-max-digits="2"] > [data-line]::before': {
              width: "1rem",
            },
            'code[data-line-numbers-max-digits="3"] > [data-line]::before': {
              width: "2rem",
            },
            pre: {
              paddingRight: 0,
              paddingLeft: 0,
              color: "var(--shiki-light)",
              backgroundColor: "var(--shiki-light-bg)",
              border: "1px solid #e5e7eb",
            },
            ".dark pre": {
              backgroundColor: "var(--shiki-dark-bg)",
              color: "var(--shiki-dark)",
              border: "1px solid #374151",
            },
            "pre > code > span": {
              paddingLeft: "1.1rem",
              paddingRight: "1rem",
            },
            "pre code span": {
              color: "var(--shiki-light)",
            },
            ".dark pre code span": {
              color: "var(--shiki-dark)",
            },
            "[data-highlighted-line]": {
              backgroundColor: "rgba(253, 224, 71, 0.2)",
            },
            u: {
              textUnderlineOffset: "4px",
              textDecorationThickness: 1,
              fontWeight: 600,
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
