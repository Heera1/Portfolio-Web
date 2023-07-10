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
          "url(https://github.com/Heera1/Portfolio_Website/assets/99064439/d04eb7a8-5b71-47b8-a190-e0895e2080b1)",
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
