import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "imagem-fundo": "url('/Marília-Completa.png')"
      },
      colors: {
        brown: "#1E1E1E",
      },
      fontFamily: {
        'be-vietnam-pro': ['Be Vietnam Pro', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;