// tailwind.config.js

module.exports = {
  // ... other configurations
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {},
  },
  colors: {
    black: "#6B21A8", // Replacing black with purple-800
  },
  textColor: {
    black: "#000000", // Keeping text black
  },
  variants: {},
  plugins: [],
};
