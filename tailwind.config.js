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
        background3: "rgb(241, 241, 241, 0.03)",
        background4: "rgb(241, 241, 241, 0.2)",
        highlight: "#917fb3",
        highlight2: "#d1cde5",
        lime: "#3e3a4d",
        curse: "#addbdf",
        offGreen: "#928daa",
        pageName: "#addbdf"
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
