/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // The reference stylesheet (src/styles/autofix.css) supplies the base reset.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#BD1A22', dark: '#8f141a' },
        charcoal: { DEFAULT: '#121212', light: '#1c1c1c' },
      },
    },
  },
  plugins: [],
};
