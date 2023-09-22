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
        landingPage: "url(../public/background.jpg)",
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
  plugins: [require("tailwind-scrollbar-hide")],
};
