const tailwindConfig = require('tailwind');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  presets: [tailwindConfig],
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:['"Baloo 2"', 'Noto Sans Thai', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};

module.exports = config;
