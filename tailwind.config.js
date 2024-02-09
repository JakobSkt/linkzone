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
      },
      backgroundImage: {
        'lightDots': 'url("./src/lib/assets/dot-pattern-dark.svg")',
        'darkDots': 'url("./src/lib/assets/dot-pattern-darkV2.svg")',
      },
      backgroundSize: {
        'dotsSize': '10%',
      },
      backgroundPosition: {
        'dotsPosition': '10% 15%',
      }
    },
  },
  plugins: [],
}

