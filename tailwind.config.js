/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem'
      }
    },
    fontFamily: {
      sans: ["Poppins", "system-ui", 'sans-serif'],
      serif: ["Merriweather", "Georgia", "serif"],
      cursive: ["Whisper", "cursive"]
    },
    extend: {
      colors: {
        blessed: {
          primary: "#735826",
          ["primary-light"]: "#A78B58",
          secondary: '#D9C49E',
          ["secondary-light"]: "#DACDB6",
          white: '#F1F1F1', 
          black: '#130F0E',
          gray: '#4F4B40'
        }
      }
    },
  },
  plugins: [],
}

