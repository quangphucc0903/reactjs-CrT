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
          400: '#9AA4B2',
          'gray-500-base': '#3D3D3D',
          'gray-200': '#949494',
        },
        blueCustomColor: '#0D88D8',
        whiteCustomColor: '#F5EEEC',
        green: {
          500: '#09AE7D',
        },
        grayLight: '#6B6B6B',
        gray: {
          600: '#475467',
          700: '#344054',
        },
        light: '#FAFAFA',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}