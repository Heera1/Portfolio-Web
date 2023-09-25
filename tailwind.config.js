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
          "url(https://velog.velcdn.com/images/caecus/post/3bbcde16-5718-4b9e-bf5b-13a673259ffa/image.jpg)",
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
