/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Permite cambiar el modo manualmente con "dark"
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        retro: ["'Press Start 2P'", "cursive"],
      },
      colors: {
        retroBlue: "#00A3E0",
        retroPurple: "#8B00E0",
        retroYellow: "#FFD700",
      },
    },
  },
  plugins: [],
};
