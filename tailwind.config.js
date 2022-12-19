/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      grey: {
        "100": "#A3A3A3",
        "200": "#868686",
        "300": "#6F6F6F",
        "400": "#5B5B5B",
        "500": "#424242",
        "600": "#333333",
        "700": "#222222",
        "800": "#1D1D1D",
        "900": "#181818",
      },
      white: "#FCFCFC",
      black: "#121212",
      primary: {
        "50": "#FFCDC3",
        "100": "#FB5232",
        "200": "#A13E2A",
        "300": "#62332A",
        "400": "#442924",
      },
      text: {
        "high": "#FFFFFF",
        "middle": "#A3A3A3",
        "low": "#5B5B5B",
        "label": "#424242",
        "button": "#FFCDC4",
        "button-disabled": "##FFCDC4",
      }

    },
    extend: {},
  },
  plugins: [],
}
