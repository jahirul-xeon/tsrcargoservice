/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f5821f',
        'primary-dark': '#d96e10',
        dark: '#0d1b35',
        'dark-2': '#1a2d50',
        'text-dark': '#1c2035',
        'text-body': '#666f7b',
        'light-bg': '#f4f7fc',
        border: '#e8edf2',
      },
      fontFamily: {
        heading: ['Barlow', 'sans-serif'],
        body: ['Jost', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
}
