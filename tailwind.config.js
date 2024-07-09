/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        'image1': "url('assets/image1.jfif')",
      },
      fontFamily: {
        'Martel': ['Martel', 'serif'],
        'Open-Sans': ['Open Sans', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

