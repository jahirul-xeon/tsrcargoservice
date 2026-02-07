/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0b111d',
          900: '#0f172a',
          800: '#1b2434',
          700: '#243047',
          600: '#2f3c57',
        },
        steel: {
          500: '#6b7c98',
          400: '#8b9bb3',
          300: '#a9b7ca',
        },
        teal: {
          500: '#1fb7a6',
          400: '#33c6b6',
        },
        gold: {
          500: '#c9a227',
          400: '#d7b246',
        },
        electric: {
          500: '#2f6bff',
          400: '#4f7dff',
        },
        cloud: {
          50: '#f6f8fb',
          100: '#eef2f7',
          200: '#e4e9f1',
        },
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 25px 60px rgba(10, 18, 32, 0.18)',
        glow: '0 12px 40px rgba(47, 107, 255, 0.25)',
      },
    },
  },
  plugins: [],
}
