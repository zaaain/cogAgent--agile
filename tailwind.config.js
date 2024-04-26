/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      zIndex: {
        130: 900,
        140: 950,
        150: 999,
      },
      screens: {
        xs: { min: "180px", max: "640px" },
        // safari: {
        //   raw: "(min-color-index:0) and (-webkit-min-device-pixel-ratio:0)",
        // },
      },
      boxShadow:{
        card: "0px 4px 18px rgba(0, 0, 0, 0.1)",
        dashboard: "0px 2px 11px rgba(0, 0, 0, 0.32)",
        cards: "box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" 
      },
      backgroundImage: {
        "gradient": "linear-gradient(to top, #060b27,#41E88D)",
      },
      fontFamily: {
        Mont: ["Mont"],
      },
      colors: {
        primary: "#060b27",
        secondary: "#FF6B3D",
      },
      backgroundColor: {
        "btn": "var(--Primary-Blue-violet, #7214FF)",
        "sec":"rgb(255, 255, 255)"
      },
  
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

