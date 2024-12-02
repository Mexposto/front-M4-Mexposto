import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#d8d7d7",
        tertiary: "#696666",
        quaternary: "#81a6ba",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        navbar: "3rem",
        footer: "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
