/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ja,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#14181c',
        'card': '#2c3440',
        'actioncard': '#456',
        'actiontext': '#bcd',
        'greytext': '#9ab'
      },
    },
  },
  plugins: [],
}

