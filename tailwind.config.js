const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    textShadow: {
      sm: '0 2px 0 #333',
      default: '0 2px 0 #000',
      md: '0 2px 2px #000',
      h1: '0 0 3px #FF0000, 0 0 5px #0000FF',
      xl: '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      none: 'none',
    },
    extend: {
      fontSize: {
        'xxs': '.7rem',
        'xxxs': '.65rem'
      },
      colors: {
        red: {
          ...colors.red,
          'apple': '#980000',
          'apple-light': '#CC0202'
        },
      },
      spacing: {
        '0.75': '.15625rem',
        '0.5': '.125rem',
        '0.25': '.06225rem',
        '80': '20rem',
        '96': '24rem',
        '128': '32rem'
      },
      linearGradientColors: theme => theme('colors'),
      radialGradientColors: theme => theme('colors'),
      conicGradientColors: theme => theme('colors'),
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-textShadow'),
    require('tailwindcss-gradients'),
  ],
}
