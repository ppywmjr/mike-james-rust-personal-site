/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mjr_light_blue: "#A7C2EA",
        mjr_light_green: "#CDDECC",
        mjr_very_light_green: "#DDE6DD",
        mjr_dark_blue: "#0D2B57",
        mjr_orange: "#E07A5F",
        mjr_very_dark_orange: "#b8573d",
        mjr_dark_orange: "#CC6B50",
        mjr_light_orange: "#E1B0A3",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
