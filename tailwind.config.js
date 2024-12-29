/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "serif"],
      },

      colors: {
        "whiteSmoke": "#F5F5F5",
        "extraLightGray": "#E5E4E2",
        "lightGray": "#BEBFC5",
        "gray": "#808080",
        "gunmetalGray": "#2A3439",
        "richBlack": "#010B13",
        "smokyBlack": "#100C08",
        "darkCyan": "#008B8B",
      },

      keyframes: {
        typingIndicatorAnimationKeyframes: {
          "0%, 70%": {transform: "translateY(0)"},
          "35%": {transform: "translateY(-4px)"},
        },
      },

      animation: {
        "typingIndicatorAnimation": "typingIndicatorAnimationKeyframes 1s linear infinite",
      },
    },
  },
  plugins: [],
}