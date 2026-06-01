import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary text green (logo / headings)
        sage: {
          DEFAULT: "#869A4E",
          dark: "#6c7d3e",
          light: "#a1b66a",
        },
        // Background green (soft band)
        moss: {
          DEFAULT: "#BBC69C",
          light: "#d1d9b8",
          dark: "#9da884",
        },
        // Light neutral background
        bone: "#F7F7F5",
        cream: {
          DEFAULT: "#FEF0D1",
          dark: "#f5e0a8",
          light: "#fff8e5",
        },
        ink: "#2b2820",
        // WhatsApp brand
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-catamaran)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
        heading: ["var(--font-androgy)", "serif"],
        androgy: ["var(--font-androgy)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      boxShadow: {
        soft: "0 2px 12px -2px rgba(43, 40, 32, 0.08)",
        pill: "0 1px 3px rgba(43, 40, 32, 0.06), inset 0 -1px 0 rgba(43, 40, 32, 0.04)",
        drawer: "-12px 0 40px -10px rgba(43, 40, 32, 0.25)",
        wa: "0 8px 24px -6px rgba(37, 211, 102, 0.45)",
      },
      keyframes: {
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-right": {
          "0%": { opacity: "0", transform: "translateX(12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-left": {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "grow-x": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        "fade-down": "fade-down 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-up": "fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 800ms ease-out both",
        "fade-right": "fade-right 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-left": "fade-left 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "scale-in": "scale-in 900ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "grow-x": "grow-x 900ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-in-right": "slide-in-right 500ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "float": "float 4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
