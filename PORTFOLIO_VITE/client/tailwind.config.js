/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1D1F3F",
        "secondary": "#FF4500",
        "teritary": "#00FFFF",
      },
    },
    screens: {
      'lg': {'max': '2023px'},

      'sm': {'max': '1000px'},
    },
  },
  plugins: [],
}