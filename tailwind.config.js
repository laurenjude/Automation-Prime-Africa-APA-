/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0D1117',
        'dark-secondary': '#161B22',
        'dark-tertiary': '#1C2333',
        'navy': '#1B2A4A',
        'gold': '#D4A843',
        'gold-light': '#E8C36A',
        'gold-dark': '#B8922F',
        'white-muted': '#A0A0A0',
        'white-dim': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4A843, #E8C36A)',
        'gradient-dark': 'linear-gradient(135deg, #0D1117, #161B22)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
