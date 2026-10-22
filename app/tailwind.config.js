/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#BD1A22', dark: '#8f141a' },
        charcoal: { DEFAULT: '#121212', light: '#1c1c1c' },
      },
      fontFamily: {
        display: ['"Arial Black"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        body: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
