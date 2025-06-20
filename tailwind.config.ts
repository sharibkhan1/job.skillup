import type { Config } from "tailwindcss";

export default {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
// tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      sans: ["var(--font-work-sans)", "sans-serif"],
    },
  },
},
} satisfies Config;
