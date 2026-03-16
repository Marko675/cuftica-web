/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00f3ff",
        secondary: "#bc13fe",
        background: "#0a0a0a",
        surface: "#111111",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
