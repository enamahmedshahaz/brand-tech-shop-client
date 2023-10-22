/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif", // Adds a new `font-lora` class
        lato: "'Lato', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ['light'],
  }

}

