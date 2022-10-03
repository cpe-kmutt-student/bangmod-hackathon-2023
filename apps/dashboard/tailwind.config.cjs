const tailwindConfig = require('tailwind');

const config = {
  presets: [tailwindConfig],
  content: ['./src/**/*.{html,tsx}'],
};

module.exports = config;
