import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--c-bg-rgb) / <alpha-value>)",
        panel: "rgb(var(--c-panel-rgb) / <alpha-value>)",
        ink: "rgb(var(--c-ink-rgb) / <alpha-value>)",
        fg: "rgb(var(--c-fg-rgb) / <alpha-value>)",
        muted: "rgb(var(--c-muted-rgb) / <alpha-value>)",
        accent: "rgb(var(--c-accent-rgb) / <alpha-value>)",
        divider: "rgb(var(--c-divider-rgb) / <alpha-value>)",
        line: "rgb(var(--c-line-rgb) / <alpha-value>)",
        // Keep these aliases for legacy pages
        paper: "rgb(var(--c-bg-rgb) / <alpha-value>)",
        carbon: "rgb(var(--c-ink-rgb) / <alpha-value>)",
        bone: "rgb(var(--c-bg-rgb) / <alpha-value>)",
        gold: "rgb(var(--c-accent-rgb) / <alpha-value>)",
        ash: "rgb(var(--c-muted-rgb) / <alpha-value>)",
        // Static legacy
        steel: "#1F232A",
        iron: "#2A2F38",
        goldDark: "#C58A35",
        signal: "#FF6B00",
        brandRed: "rgb(var(--c-divider-rgb) / <alpha-value>)",
        brandBlue: "#1A3D8F",
        rust: "rgb(var(--c-accent-rgb) / <alpha-value>)",
      },
      fontFamily: {
        // 全站统一中文黑体（依次回退）
        sans: [
          '"Microsoft YaHei"',
          '"微软雅黑"',
          "sans-serif",
        ],
        display: [
          '"Microsoft YaHei"',
          '"微软雅黑"',
          "sans-serif",
        ],
        mono: [
          '"Microsoft YaHei"',
          '"微软雅黑"',
          "sans-serif",
        ],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        scan: "scan 2.5s linear infinite",
        slideIn: "slideIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
