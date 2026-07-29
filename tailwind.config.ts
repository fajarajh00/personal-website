import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

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
        glow: "0 0 80px rgba(59, 130, 246, 0.24)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.22)"
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" }
        }
      },
      animation: {
        gradient: "gradient 12s ease infinite",
        float: "float 7s ease-in-out infinite"
      }
    }
  },
  plugins: [forms]
};

export default config;
