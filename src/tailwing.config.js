/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#2C3E50',
          'primary-dark': '#1A252F',
          secondary: '#F1C40F',
          light: '#ECF0F1',
          dark: '#34495E',
        }
      },
    },
    plugins: [],
  }