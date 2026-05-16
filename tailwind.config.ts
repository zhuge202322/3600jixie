import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Heavy industrial palette — themable via CSS vars
        ink: "rgb(var(--c-deep-rgb) / <alpha-value>)",        // deep base
        carbon: "rgb(var(--c-mid-rgb) / <alpha-value>)",      // mid panel
        gold: "rgb(var(--c-accent-rgb) / <alpha-value>)",     // accent
        // Static
        steel: "#1F232A",
        iron: "#2A2F38",
        line: "#3A4049",
        ash: "#9CA3AF",
        bone: "#E7E5E0",
        paper: "#F4F4F0",
        goldDark: "#E6BE00",
        signal: "#FF6B00",
        brandRed: "#D7232A",
        brandBlue: "#1A3D8F",
        rust: "rgb(var(--c-accent-rgb) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Oswald", "Rajdhani", "Inter", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
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
