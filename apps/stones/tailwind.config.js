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
        Playfair: ['Playfair Display', 'serif'],
        Inter: ['Inter', 'sans-serif'],
        Americana: ['Americana', 'sans-serif'],
      },
      screens: {
        '3xl': '2100px',
      },
    },
  },
  plugins: [],
};
