/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c0e2A",
        secondary: "#5c85d6",
        borderGray: "#bdc2cb",
        alive: "rgba(160, 221, 224,0.60)",
        dead: "rgba(248, 134, 168, 0.6)",
        unknown: "rgba(253, 196, 83, 0.6)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        fontExo: ["Exo 2", "sans-serif"],
        fontPrism: ["Tilt Prism", "cursive"],
      },
      backgroundImage: {
        imageBackground:
          "linear-gradient(50deg, rgba(51,65,85,1) 51%, rgba(51,65,85,0.7399160347732843) 56%, rgba(255,255,255,0.5) 59%, rgba(255,255,255,1) 61%, rgba(51,65,85,0.74) 71%, rgba(51,65,85,1) 80%), url('./images/bookCover2.jpg');",
      },
      dropShadow: {
        "3xl": "0px 0px 31px 7px rgba(0, 0, 0, 1)",
        "4xl": [
          "0 35px 35px rgba(168, 156, 156, 0.25)",
          "0 45px 65px rgba(168, 156, 156, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
