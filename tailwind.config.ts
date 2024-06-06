/** @type {import("tailwindcss").Config} */

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  plugins: [],
  prefix: "",
  theme: {
    screens: {
      lg: "1024px",
      sm: "640px",
      "2xl": "1536px",
      xl: "1280px",
      xs: "360px",
      md: "768px",
    },
    variants: {
      scrollbar: ["dark"],
    },
    container: {
      center: true,
      padding: "0.9375rem",
    },
    extend: {
      data: {
        checked: "ui~=\"checked\"",
      },
      spacing: {
        // Custom vars
        "header-height": "3.75rem", // 60px
      },
      // Custom fonts
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "Large-26": ["1.625rem", {fontWeight: "600", lineHeight: "2.25rem"}], // '2.25rem' = 26px, '2.25rem' = 36px,
        "H1-20": ["1.225rem", {fontWeight: "700", lineHeight: "2.25rem"}], // '1.225rem' = 20px, '2.25rem' = 36px,
        "H2-18": ["1.125rem", {fontWeight: "700", lineHeight: "1.5rem"}], // '1.125rem' = 18px, '1.5rem' = 24px,
        "H3-16": ["1rem", {fontWeight: "600", lineHeight: "1.5rem"}], // '1rem' = 16px, '1.5rem' = 24px,
        "bold-text-16": ["1rem", {fontWeight: "700", lineHeight: "1.5rem"}], // '1rem' = 16px, '1.5rem' = 24px,
        // BASE APP FONT: regular_text 16
        "regular-text-16": ["1rem", {fontWeight: "400", lineHeight: "1.5rem"}], // '1rem' = 16px, '1.5rem' = 24px,
        "medium-text-14": ["0.875rem", {fontWeight: "500", lineHeight: "1.5rem"}], // '0.875rem' = 14px, '1.5rem' = 24px,
        "sm-bold-14": ["0.875rem", {fontWeight: "700", lineHeight: "1.5rem"}], // '0.875rem' = 14px, '1.5rem' = 24px,
        "semi-bold_small_text_12": ["0.75rem", {fontWeight: "400", lineHeight: "1rem"}], // '0.75rem' = 12px, '1rem' = 16px,
        "regular-text-14": ["0.875rem", {fontWeight: "400", lineHeight: "1.5rem"}], // '0.875rem' = 14px, '1.5rem' = 24px,
        "text-regular_link-14": ["0.875rem", {fontWeight: "400", lineHeight: "1.5rem"}], // '0.875rem' = 14px, '1.5rem' = 24px,
        "small-text-12": ["0.75rem", {fontWeight: "400", lineHeight: "1rem"}], // '0.75rem' = 12px, '1rem' = 16px,
        "small-link_12": ["0.75rem", {fontWeight: "400", lineHeight: "1rem"}], // '0.75rem' = 12px, '1rem' = 16px,
      },
      fontWeight: {
        "bold-700": "700",
        "medium-500": "500",
        "main-400": "400",
        "semi-bold-600": "600",
      },
      lineHeight: {
        "s-16": "16px", // 1rem
        "m-main-24": "24px", // 1.5rem
        "l-36": "36px", // 2.25rem
      },
      // Design colors
      colors: {
        Primary: {
          100: "#73A5FF",
          300: "#4C8DFF",
          500: "#397DF6",
          700: "#2F68CC",
          900: "#234E99",
        },
        Danger: {
          100: "#FF8099",
          300: "#F23D61",
          500: "#CC1439",
          700: "#990F2B",
          900: "#660A1D",
        },
        Dark: {
          100: "#4C4C4C",
          300: "#333333",
          500: "#171717",
          700: "#0D0D0D",
          900: "#000000",
        },
        Light: {
          100: "#FFFFFF",
          300: "#F7FBFF",
          500: "#EDF3FA",
          700: "#D5DAE0",
          900: "#8D9094",
        },
        Success: {
          100: "#80FFBF",
          300: "#22E584",
          500: "#14CC70",
          700: "#0F9954",
          900: "#0A6638",
        },
        Warning: {
          100: "#FFD073",
          300: "#E5AC39",
          500: "#D99000",
          700: "#D99000",
          900: "#D99000",
        },
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
    fontFamily: {
      inter: "Inter sans-serif",
    },
  },
};
