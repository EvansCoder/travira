module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Inter'],
      },
     
      colors:{
        "active": "#3B82F6",
        "secondary": " #676767",
        "dark-blue": "#0E1035",
        "gray":  "#BDBBBB",
      },
      borderWidth: {
        "1": "1px",
    },
    spacing:{
      "450":"450px",
      "zero":"-172px",
      "negative":"-35px",
    },
    maxWidth: {
      "754":"754px",
    },
    minHeight: {
      "full":"75vh",
    },
    lineHeight: {
      '12': '3.5rem',
    },
    zIndex: {
      'negativeOne': '-1',
    }
    
    },
  },
  plugins: [],
}