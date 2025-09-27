/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#b9dbff",
          300: "#8cc3ff",
          400: "#5aa6ff",
          500: "#2b87ff",
          600: "#156ff0",
          700: "#0c59c7",
          800: "#0d4aa1",
          900: "#0e3f85"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [],
}
