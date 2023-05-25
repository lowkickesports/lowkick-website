/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['bebas-neue-pro', 'sans-serif'],
        prohibition: ['prohibition', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        main: {
          primary: "#36A2D3",
          secondary: "#156BA8",
          accent: "#DA4344",
          neutral: "#C33038",
          "base-100": "#16142E",
          "base-200": "#410028",
          info: "#ffff",
          warning: "#E3DC32",
          error: "#F2600C",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
