// tailwind.config.js
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1260px",
      xxl: "1300px",
    },
    extend: {
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      spacing: {
        7: "1.75rem",
        14: "3.5rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        28: "7rem",
        30: "7.5rem",
        35: "8.75rem",
        36: "9rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        60: "15rem",
        72: "18rem",
        76: "19rem",
        80: "20rem",
        96: "24rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        120: "30rem",
        140: "35rem",
        144: "36rem",
        155: "38.75rem",
        160: "40rem",
        168: "42rem",
        170: "42.5rem",
        180: "45rem",
        200: "50rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      width: {
        "max-content": "max-content",
        "48/100": "48%",
      },
      minWidth: {
        40: "10rem",
        45: "11.25rem",
        50: "12.5rem",
      },
      minHeight: {
        45: "11.25rem",
        50: "12.5rem",
        64: "16rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFF",
      whitish: "#FBFBFB",
      lightGrey: "#F2F2F2",
      mediumGrey: "#E0E0E0",
      black: "#000",
      dark: "#173244",
      green: "#129590",
      lightGreen: "#E8F5F4",
      darkGreen: "#00817C",
      red: "#F82530",
    },
    fontSize: {
      xs: ["12px", "1.6"],
      sm: ["14px", "1.6"],
      base: ["16px", "1.6"],
      lg: ["18px", "1.5"],
      xl: ["24px", "1.5"],
      "2xl": ["32px", "1.2"],
      "5xl": ["48px", "1.2"],
      "7xl": ["64px", "1.2"],
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    translate: ["responsive", "hover", "focus", "active", "group-hover"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "16px",
          paddingRight: "16px",

          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1200px",
            paddingLeft: "0",
            paddingRight: "0",
          },
        },
      });
    },
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["src/html/**/*.html", "src/js/**/*.js"],
  },
};
