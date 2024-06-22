/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  safelist: [],
  theme: {
    extend: {
      colors: {
        brand: {
          100 : "#f8a832",
          200: "#faba44",
          300: "#fccc56",
          400: "#fdde68",
          500:"#fff07a",
          600: "#3e20dc",
          700: "#2e18b9",
          800: "#1f1096",
          900: "#0f0872",
          1000: "#00004f"
        },
      },
      fontFamily:{
        josefin : "Josefin Sans",
        lexend : "Lexend",
        assistant : "Assistant",
        cabin: "Cabin",
        comfortaa: "Comfortaa",
        khula: "Khula",
        varela: "Varela Round"
      },
      backgroundImage:{
        escola:{
          url:'screen1.jpg'
        }
      },
      width : {
        100: "400px",
        150: "450px",
        200: "500px",
        300: "600px",
        400: "700px",
        450: "750px",
        500: "800px",
        600: "900px",
        650: "950px",
        700: "1000px",
        750: "1500px",
        800: "2000px",
        850: "2500px",
        
        1000: "3000px",
      },
      height : {
        97 : "115px",
        99 : "390px",
        100: "400px",
        200: "500px",
        300: "600px",
        350: "620px",
        400: "700px",
        450: "750px",
        500: "800px",
        600: "900px",
        650: "950px",
        700: "1000px",
        750: "1500px",
        1000: "3000px",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%" : {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%" : {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%" : {
            transform: "translate(-20px, 20%) scale(0.9)"
          },
          "100%" : {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
};

