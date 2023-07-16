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
        Playfair: ['Playfair Display', 'sans-serif'],
        logo: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
