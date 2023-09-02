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
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        adobeTextPro: ['Adobe Text Pro', 'serif'],
        americana: ['Americana', 'sans-serif'],
        readerPro: ['Reader Pro', 'sans-serif'],
      },
      colors: {
        cheese: '#F9D423',
        cheeseItUpPink: '#ec4899',
      },
    },
  },
  plugins: [],
};
