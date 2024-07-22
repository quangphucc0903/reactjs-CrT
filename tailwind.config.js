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
            },
            backgroundImage: {
              'custom-gradient': 'linear-gradient(180deg, #FFF 0%, #EADBD7 100%)',
            },
        },
    },
    plugins: [],
  }