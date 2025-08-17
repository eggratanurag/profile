/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
      './app/**/*.{js,jsx}',
      './src/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        colors: {
          background1: "#0d1116",
          background2: "rgb(241, 241, 241, 0.1)",
          background3: "rgb(241, 241, 241, 0.03)",
          background4: "rgb(241, 241, 241, 0.2)",
          highlight: "#917fb3",
          highlight2: "#d1cde5",
          lime: "#3e3a4d",
          curse: "#addbdf",
          offGreen: "#928daa",
          pageName: "#addbdf",
          border: "hsl(var(--border))",
        },
        keyframes: {
          strike: {
            from: { width: 0 },
            to: { width: "100%" }
          },
          marquee: {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(calc(-100% - var(--gap)))' }
          },
          'marquee-vertical': {
            from: { transform: 'translateY(0)' },
            to: { transform: 'translateY(calc(-100% - var(--gap)))' }
          }
        },
        animation: {
          marquee: 'marquee var(--duration) linear infinite',
          'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
        },
        fontFamily: {
          "Montserrat": ['Montserrat', "sans-serif"],
          "Zeyada": ['Zeyada', "cursive"],
          "Poppins": ['Poppins', "sans-serif"],
          "Saira": ["Saira Extra Condensed", "sans-serif"],
        }
      },
    },
    plugins: [],
  }