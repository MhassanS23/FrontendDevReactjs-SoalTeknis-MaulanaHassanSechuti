/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "blue-1": "#100d1f",
        "blue-2": "#3eaffa",
        "blue-3": "#76f5f1",
        "blue-4": "#184ade",
        "yellow-1": "#fccb28",
        "red-1": "#de1c18",
        "green-1": "#04db16",
        "green-2": "#16fa1a",
        "purple-1": "#8c52ff",
        "orange-1": "#fa5316",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        purple:
          "0 4px 6px -1px rgba(128, 0, 128, 0.5), 0 2px 4px -1px rgba(128, 0, 128, 0.06)",
      },
    },
  },
  plugins: [],
};
