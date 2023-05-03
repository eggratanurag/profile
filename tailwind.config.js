/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background1: "#100f0f",
        background2: "rgb(241, 241, 241, 0.1)",
        background3: "rgb(241, 241, 241, 0.05)",
        background4: "rgb(241, 241, 241, 0.2)",
        highlight: "#697C37",
        highlight2: "#b6b681",
        lime: "#D2D86E",
        offGreen: "#95956e"
        // green: "#44924c"
      },

      keyframes: {
       strike: {
        from: { width: 0},
        to: { width: "100%"}
      }
      },

      fontFamily: {
        "Zeyada": ['Zeyada'],
        "poppins": ['poppins'],
        "Montserrat": ['Montserrat']
       
      },

    },
  },
  plugins: [],
}
