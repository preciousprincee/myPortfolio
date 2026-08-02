/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        primary: "#7C3AED",
        secondary: "#3B82F6",
        accent: "#22D3EE",
        ink: "#FFFFFF",
        "ink-muted": "#B8C1D1",
        glass: "rgba(255,255,255,.08)",
        "glass-border": "rgba(255,255,255,.12)",
      },
      fontFamily: {
        display: ["'Clash Display'", "'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        xl2: "24px",
        xl3: "32px",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124,58,237,0.45)",
        "glow-cyan": "0 0 40px -10px rgba(34,211,238,0.45)",
        glass: "0 8px 32px rgba(0,0,0,0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
        blink: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
