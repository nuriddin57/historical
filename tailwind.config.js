/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Trebuchet MS"', '"Segoe UI"', 'sans-serif'],
        display: ['"Palatino Linotype"', '"Book Antiqua"', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 20px 80px rgba(156, 121, 66, 0.18)',
        soft: '0 18px 60px rgba(20, 16, 12, 0.18)',
      },
    },
  },
  plugins: [],
};
