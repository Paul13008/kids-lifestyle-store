module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF7FB',
          100: '#FFE3F1',
          200: '#FFC2DE',
          300: '#FF9FCC',
          400: '#FF7AB6',
          500: '#FF4FA0',
          600: '#E63E8E',
          700: '#C12E77',
          800: '#9B2061',
          900: '#7D184F',
        },
        mint: '#9EE8D8',
        sky: '#7EC8FF',
        lemon: '#FFE680',
        lavender: '#C7B8FF',
        sand: '#FFF9F2',
        ink: '#2F2A3A',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'cursive'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.06)',
        sticker: '0 6px 0 rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
