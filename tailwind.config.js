module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html",
  ],
  theme: {
    extend: {},
    debugScreens: {
      position: ["top", "left"],
    },
    fontFamily: {
      roboto: ["Roboto", "san-serif"],
    },
  },
  variants: {},
  plugins: [require("tailwindcss-debug-screens")],
};
