/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      scale: {
        'flip': '-1',
      }
    },
  },
  plugins: [],
}

