import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: {
          DEFAULT: "#F4EFE6",
          light: "#FAF7F1",
          dark: "#E8E0CE",
        },
        ink: {
          DEFAULT: "#14181F",
          soft: "#2A2F38",
          mute: "#5A6068",
        },
        clay: {
          DEFAULT: "#C2553D",
          deep: "#9E3E29",
          light: "#E8B5A6",
        },
        sage: "#6B7E6E",
        mist: "#E5DCC9",
        line: "rgba(20,24,31,0.12)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter2: "-0.025em",
      },
    },
  },
  plugins: [],
};

export default config;
