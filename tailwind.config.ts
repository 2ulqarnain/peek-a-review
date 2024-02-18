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
        "baby-blue": "#E7F2F8",
        "baby-blue-darker": "#3a94c5",
        Aquamarine: "#74BDCB",
        "Aquamarine-darker": "#347d8b",
        salmon: "#FFA384",
        freesia: "#EFE7BC",
      },
      fontFamily: {
        "roboto-slab": "var(--font-roboto-slab)",
      },
    },
  },
  plugins: [],
};
export default config;