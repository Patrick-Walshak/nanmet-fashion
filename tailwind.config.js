/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black:   '#1A1A18',
        gold:    '#C9A96E',
        'gold-light': '#E2C99A',
        cream:   '#F5F0E8',
        taupe:   '#7A7060',
        linen:   '#E8DDD0',
        offwhite:'#FDFAF6',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
}
