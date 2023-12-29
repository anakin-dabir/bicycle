/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        _bg: '#ea5823',
        _bgText: '#fa7140',
        _darkBg: '#1f1f1f',
        _green: '#2e6916',
        _greenText: '#56d024',
      },
      dropShadow: {
        _text: '0px 3px 3px rgb(0 0 0 / 1)',
      },
      fontFamily: {
        chakra: ['var(--font-chakra)'],
        teko: ['var(--font-teko)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
