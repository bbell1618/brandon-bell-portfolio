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
        navy: "#0D2466",
        "navy-hover": "#162E8A",
        "text-primary": "#1A1A2E",
        "text-secondary": "#4A5568",
        "bg-section": "#F5F7FA",
        "bg-card": "#EEF1F6",
        border: "#DDE3ED",
        "result-bg": "#F0F4FF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      fontSize: {
        "hero-name": ["64px", { lineHeight: "1.05", fontWeight: "800" }],
        "section-header": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "sub-header": ["22px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["17px", { lineHeight: "1.7", fontWeight: "400" }],
        label: ["13px", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.08em" }],
      },
    },
  },
  plugins: [],
};
export default config;
