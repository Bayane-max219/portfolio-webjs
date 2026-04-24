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
        yellow: {
          vivid:  "#FFDD00",
          bright: "#FFE840",
          soft:   "#FFF3A3",
          dark:   "#D4B800",
          ink:    "#1A1A00",
        },
        ink: {
          DEFAULT: "#111111",
          soft:    "#333333",
          muted:   "#666666",
          faint:   "#999999",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          off:     "#FAFAFA",
          warm:    "#FFFDF0",
          border:  "#E8E8E8",
        },
      },
      fontFamily: {
        sans:    ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Inter'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1", fontWeight: "900" }],
        "display-lg": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.05", fontWeight: "800" }],
      },
      animation: {
        "slide-in": "slideIn 0.4s ease-out",
        "pop-in":   "popIn 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        marquee:    "marquee 20s linear infinite",
      },
      keyframes: {
        slideIn: {
          from: { opacity: "0", transform: "translateX(-16px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        popIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
