/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          dark: '#29353C',
          slate: '#44576D',
          steel: '#768A96',
          sky: '#AAC7D8',
          light: '#DFEBF6',
          neutral: '#E6E6E6',
        },
      },
    },
  },
  plugins: [],
}

