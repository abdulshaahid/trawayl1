/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00AA6C',
        'primary-dark': '#008C5B',
      },
    },
  },
  plugins: [],
};