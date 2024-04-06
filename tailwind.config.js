module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fafafa",
          500: "#a0a0ab",
          600: "#70707b",
          800: "#3f3f46",
          900: "#26272b",
          "900_01": "#101828",
          "50_01": "#fcfcfd",
          "900_cc": "#131316cc",
          "50_02": "#fcfcfc",
          "900_02": "#050a24",
        },
        blue: { A400: "#1570ef" },
        light_blue: { 50: "#d1e9ff" },
        blue_gray: { 100: "#d1d1d6", 300: "#98a2b3", 800: "#344054", "100_01": "#d0d5dd" },
        white: { A700: "#ffffff" },
        indigo: { 800: "#194185", A700_01: "#413dff" },
        black: { 900: "#0a0a0a" },
        indigo_A700_02: "#3e3bf2",
      },
      boxShadow: { xs: "20px 40px 60px 0px #000000" },
      fontFamily: { poppins: "Poppins", russoone: "Russo One" },
      backgroundImage: { gradient: "linear-gradient(180deg, #ffffff,#ffffff70)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};