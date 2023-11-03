const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
      fontFamily: {
        monaSans: ['Mona Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        righteous: ['Righteous', 'cursive'],
        adobeTextPro: ['Adobe Text Pro', 'serif'],
        americana: ['Americana', 'sans-serif'],
        readerPro: ['Reader Pro', 'sans-serif'],
        thunder: ['Thunder', 'sans-serif'],
      },
      colors: {
        cheese: '#F9D423',
        cheeseItUpPink: '#ec4899',
      },
    },
  },
  plugins: [],
};
