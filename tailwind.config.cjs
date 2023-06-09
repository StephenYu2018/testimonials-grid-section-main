/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    colors: {
      'moderate-violet': 'hsl(263, 55%, 52%)',
      'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
      'very-dark-blackish-blue': 'hsl(219, 29%, 14%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-gray': 'hsl(0, 0%, 81%)',
      'light-grayish-blue': 'hsl(210, 46%, 95%)',
    },
    fontFamily: {
      'barlow': ['\'Barlow Semi Condensed\'', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'quote-svg': 'url(\'../bg-pattern-quotation.svg\')',
      },
    },
  },
  plugins: [],
}
