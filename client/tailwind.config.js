module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "rmp-dk-blue": "#134164",
        "rmp-md-blue": "#246880",
        "rmp-lt-blue": "#B6D1D8",
        "rmp-orange": "#D87C4F",
        "rmp-dk-orange": "#AF6345",
      },
      spacing: {
        "text-area": "38rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
