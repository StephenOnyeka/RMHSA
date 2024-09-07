/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C50227",
        contingentColor: "#1C1B3B",
        contingentColor2: "#192F5A",
        contingentText: "#353372",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        image2: "/istockphoto-620952978-612x612.jpg",
      },
      fontFamily: {
        Playfair: ["Playfair", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      height: {
        "screen/1.2": "calc(100vh/1.2)",
        "screen/1.5": "calc(100vh/1.5)",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      width: {
        600: "600px",
        700: "700px",
        750: "750px",
        800: "800px",
      },
    },
  },
  plugins: [],
};
