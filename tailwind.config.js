/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        landingPage:
          "url(https://github.com/Heera1/Portfolio-Web/assets/99064439/02c6fc97-c409-45ac-b84e-be72d2a76745)",
      },
      fontFamily: {
        BacasimeAntique: ["Bacasime Antique", "serif"],
        Belanosima: ["Belanosima", "sans-serif"],
      },
      colors: {
        MainColor: "#66C2EC",
      },
    },
  },
  plugins: [],
};
