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
      'light-grayish-blue': 'hsl(210, 46%, 95%)'
    },
    fontFamily: {
      'barlow': ['\'Barlow Semi Condensed\'', 'sans-serif']
    },
    extend: {
      gridTemplateRows: {
        'testimonials-default': '34.154rem 18.308rem 17.077rem 29.538rem 33.692rem'
      },
      gap: {
        'testimonials-y': '1.846rem'
      }
    },
  },
  plugins: [],
}
