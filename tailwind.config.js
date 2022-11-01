module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: {
    content: ['./src/**/*.js', './src/**/**/*.js']
  },
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary')
    }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#005c98',
        light: "#81ecec"
      },
      black: {
        light: '#262626',
        faded: '#00000059'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      },
      green: {
        light: '#b7ffbf'
      }
    },
    extend: {
      gridTemplateRows: {
        '4': 'repeat(4, minmax(0, 1fr))'
      }
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  }
};
