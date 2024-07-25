module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CA5C3B',
        secondary: '#EEC5C7',
        customGrayColor: '#CDD5DF', 
        neutral: {
          100: '#EEF2F6',
          300: '#CDD5DF',
          400: '#9AA4B2'
        },
        blueCustomColor: '#0D88D8',
        whiteCustomColor: '#F5EEEC',

      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}