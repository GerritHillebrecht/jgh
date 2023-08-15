const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        ReaderPro: ['ReaderPro', 'sans-serif'],
        Americana: ['Americana', 'sans-serif'],
        Merriweather: ['Merriweather', 'serif'],
        PlayfairDisplay: ['Playfair Display', 'serif'],
        Comforter: ['Comforter', 'cursive'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [],
  },
};
