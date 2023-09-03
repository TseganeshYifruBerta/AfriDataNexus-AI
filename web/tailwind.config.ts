import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F97C08",
        main: "#68A4F4",
        chat: "#5399F6",
        accent: "#FF9F43",
        "primary-text": "#565656",
        "secondary-text": "#0000006B",
        "card-bg": "#FDFDFD",
        "primary-bg": "#FAFAFA",
        "secondary-bg": "#F2F1F1",
        "chip-bg": "#DFE1E8",
        "isopen-text": "#009045",
        "closed-text": "#FF8E87",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config
