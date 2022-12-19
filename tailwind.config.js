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
        main: "#daecd5",
        high: "#FFFFFF",
        middle: "#A3A3A3",
        low: "#5B5B5B",
        label: "#424242",
        button: "#FFCDC4",
        "button-disabled": "##FFCDC4",
      },
      yellow: {
        main: "#F4CC3E",
        light: "#FFE9B1",
      },
      green: {
        main: "#00B86E",
        light: "#EBFFBF",
      },
      red: {
        main: "#FB5232",
        light: "#FFCDC4",
      },
      purple: {
        main: "#5A4CFA",
        light: "#BED4FF",
      },
      pink: {
        main: "#FF77F3",
        light: "#FFC6FA",
      }

    },
    screens: {
      "3xl": { max: "1792px" },
      // => @media (max-width: 1792px) { ... }

      "2xl": { max: "1536px" },
      // => @media (max-width: 1536px) { ... }

      "1.5xl": { max: "1408px" },
      // => @media (max-width: 1408px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }

      "1.5lg": { max: "1152px" },
      // => @media (max-width: 1152px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      "1.5md": { max: "896px" },
      // => @media (max-width: 896px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 640px) { ... }

      "1.5xs": { max: "600px" },
      // => @media (max-width: 512px) { ... }

      xs: { max: "420px" },
    },
    extend: {
      boxShadow: {
        container: "inset 0 0 0 0.05em #333"
      },
      gridTemplateColumns: {
        'leaderboard-row': '1fr 6fr 3fr',
      }
    },
  },
  plugins: [],
}
