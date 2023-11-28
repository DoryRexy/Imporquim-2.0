/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        table_background: "#005DAC",
        letra_gris: "767373",
        primary: "#134786",
        secondary: "#FFD102",
        
      },
      animation: {
        tilt: "tilt 7s infinite linear",
        tiltfast: "tiltfast 1.2s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100% ": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(2deg)",
          },
          "75%": {
            transform: "rotate(-2deg)",
          },
        },
        tiltfast: {
          "0%, 50%, 100% ": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(6deg)",
          },
          "75%": {
            transform: "rotate(-6deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
