/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/hero.jpg')",
      },
      fontFamily:{
        marker:['"Permanent Marker"', 'cursive'],
        raleway:['"Raleway"', 'sans-serif'],
        sedgwick:['"Sedgwick Ave"', 'cursive'],
        paytone:['"Paytone One"', 'sans-serif'],
        roboto:['"Roboto"', 'sans-serif'],
        sedgwickAveDisplay:['"Sedgwick Ave Display"', 'cursive'],
        pacifico:['"Pacificoy"', 'cursive'],
      },

    },
    screens:{
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'notebook15i': '1366px',
      'desktop': '1440px',
      '2xl': '1536px',
      '3xl': '1600px',
      '4xl': '1680px',
      '5xl': '1920px',
      '6xl': '2048px',
      '7xl': '3840px',
      '8xl': '7680px'
    },    
  },
  plugins: [],
}

