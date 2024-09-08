/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': {width: '0ch' },
          '100%': {width: '20ch' },
        },
        blink: {
          '0% , 100%': {opacity: 1 },
          '50%': {opacity: 0},
        }
      },
      animation: {
        typing: 'typing 3s steps(20) forwards',
        blink: 'blink 1s step-end infinite'
      }
    },
  },
  plugins: [],
}


