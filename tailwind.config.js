  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                customColor: '#CA5C3B',
                secondaryColor: '#EEC5C7',
                customGrayColor: '#CDD5DF',
                neutral100: '#EEF2F6',
                neutral400: '#9AA4B2',
                blueCustomColor: '#0D88D8',
                whiteCustomColor: '#F5EEEC',

            },
            backgroundImage: {
              'custom-gradient': 'linear-gradient(180deg, #FFF 0%, #EADBD7 100%)',
            },
            fontFamily: {
              roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
  }