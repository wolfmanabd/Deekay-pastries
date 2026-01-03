import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",

        bgMain: "var(--color-bg-main)",
        bgSoft: "var(--color-bg-soft)",

        textMain: "var(--color-text-main)",
        textMuted: "var(--color-text-muted)",

        blobPrimary: "var(--color-blob-primary)",
        blobSecondary: "var(--color-blob-secondary)",
      },
    },
  },
};

export default config;
