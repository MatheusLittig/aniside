/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/*/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black': {
          '50': '#f7f7f7',
          '100': '#e3e3e3',
          '200': '#c8c8c8',
          '300': '#a4a4a4',
          '400': '#818181',
          '500': '#666666',
          '600': '#515151',
          '700': '#434343',
          '800': '#383838',
          '900': '#0F0F0F',
          '950': '#000000',
      },
      'denim': {
        '50': '#eef8ff',
        '100': '#d9efff',
        '200': '#bce4ff',
        '300': '#8dd4ff',
        '400': '#58baff',
        '500': '#319bff',
        '600': '#1b7bf5',
        '700': '#1363df',
        '800': '#1651b7',
        '900': '#184790',
        '950': '#142c57',
    },
    
      }
    },
  },
  plugins: [],
}

