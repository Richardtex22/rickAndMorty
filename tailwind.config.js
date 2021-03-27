module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '375px',

      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      width: {
        122: '30rem',
        146: '46rem',
        150: '50rem',
        158: '52rem',
        170: '55rem',
      },
      height: {
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        142: '42rem',
        146: '46rem',
        150: '50rem',
      }, 
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
        '3fr': 'minmax(0, 3fr)',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'darkGray': '#172B3A',
       })
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
