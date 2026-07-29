import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        primary: "#3B82F6",
        secondary: "#8B5CF6",
        accent: "#22D3EE"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 36px rgba(59, 130, 246, 0.18)",
        soft: "0 16px 48px rgba(0, 0, 0, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
