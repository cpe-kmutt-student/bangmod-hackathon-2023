const tailwindConfig = require('tailwind');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  presets: [tailwindConfig],
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:['"Baloo 2"', 'Noto Sans Thai', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        '28': 'repeat(28, minmax(0, 1fr))'
      },
    }
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};

module.exports = config;
