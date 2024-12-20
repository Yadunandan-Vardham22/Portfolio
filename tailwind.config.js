/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        dancing:['Dancing Script','cursive'],
        playwrite:['Playwrite CO Guides', 'cursive'],
        fredoka:['Fredoka', 'sans-serif']
      }
    },
  },
  plugins: [],
  darkMode:"class"
}

