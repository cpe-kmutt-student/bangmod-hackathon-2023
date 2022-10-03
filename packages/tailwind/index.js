const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
