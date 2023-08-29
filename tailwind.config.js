/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text_primary: "#000000",
        text_secondary: "#3D405B",
        primary: "#F4F1DE",
        secondary: "#E07A5F",
        tertiary: "#3D405B",
        cta: "#81B29A",
        cta2: "#F2CC8F",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
