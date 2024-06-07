import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navy: {
          "50": "#eff8ff",
          "100": "#dbeffe",
          "200": "#bee4ff",
          "300": "#92d3fe",
          "400": "#5fbafb",
          "500": "#399bf8",
          "600": "#237ded",
          "700": "#1b66da",
          "800": "#1d52b0",
          "900": "#1d498b",
          "950": "#112240",
        },
      },
    },
  },
  plugins: [],
};
export default config;
