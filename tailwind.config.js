module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        amber: {
          300: "var(--amber_300)",
          600: "var(--amber_600)",
          700: "var(--amber_700)",
          a400: "var(--amber_a400)",
          a400_01: "var(--amber_a400_01)",
          a700: "var(--amber_a700)",
        },
        black: {
          600: "var(--black_600)",
          900: "var(--black_900)",
          "900_01": "var(--black_900_01)",
          "900_14": "var(--black_900_14)",
          "900_26": "var(--black_900_26)",
          "900_33": "var(--black_900_33)",
          "900_35": "var(--black_900_35)",
        },
        blue: { 100: "var(--blue_100)", 600: "var(--blue_600)", 800: "var(--blue_800)", 900: "var(--blue_900)" },
        blue_gray: {
          100: "var(--blue_gray_100)",
          300: "var(--blue_gray_300)",
          400: "var(--blue_gray_400)",
          500: "var(--blue_gray_500)",
          600: "var(--blue_gray_600)",
          700: "var(--blue_gray_700)",
          800: "var(--blue_gray_800)",
          900: "var(--blue_gray_900)",
          "300_01": "var(--blue_gray_300_01)",
          "400_01": "var(--blue_gray_400_01)",
          "400_02": "var(--blue_gray_400_02)",
          "500_01": "var(--blue_gray_500_01)",
          "500_02": "var(--blue_gray_500_02)",
          "600_01": "var(--blue_gray_600_01)",
          "700_01": "var(--blue_gray_700_01)",
          "700_02": "var(--blue_gray_700_02)",
          "800_01": "var(--blue_gray_800_01)",
          "800_02": "var(--blue_gray_800_02)",
          "800_03": "var(--blue_gray_800_03)",
          "900_01": "var(--blue_gray_900_01)",
          "900_02": "var(--blue_gray_900_02)",
          "900_03": "var(--blue_gray_900_03)",
          "900_04": "var(--blue_gray_900_04)",
        },
        cyan: { 50: "var(--cyan_50)", a700: "var(--cyan_a700)" },
        deep_orange: { 200: "var(--deep_orange_200)", 300: "var(--deep_orange_300)", a700: "var(--deep_orange_a700)" },
        deep_purple: { a200: "var(--deep_purple_a200)" },
        gray: {
          50: "var(--gray_50)",
          100: "var(--gray_100)",
          200: "var(--gray_200)",
          300: "var(--gray_300)",
          400: "var(--gray_400)",
          500: "var(--gray_500)",
          600: "var(--gray_600)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "100_01": "var(--gray_100_01)",
          "100_02": "var(--gray_100_02)",
          "200_01": "var(--gray_200_01)",
          "300_01": "var(--gray_300_01)",
          "300_02": "var(--gray_300_02)",
          "300_03": "var(--gray_300_03)",
          "400_01": "var(--gray_400_01)",
          "500_35": "var(--gray_500_35)",
          "50_01": "var(--gray_50_01)",
          "50_02": "var(--gray_50_02)",
          "600_01": "var(--gray_600_01)",
          "600_02": "var(--gray_600_02)",
          "800_01": "var(--gray_800_01)",
          "900_01": "var(--gray_900_01)",
          "900_02": "var(--gray_900_02)",
          "900_03": "var(--gray_900_03)",
          "900_04": "var(--gray_900_04)",
          "900_05": "var(--gray_900_05)",
          "900_06": "var(--gray_900_06)",
        },
        green: { a200: "var(--green_a200)" },
        indigo: {
          100: "var(--indigo_100)",
          200: "var(--indigo_200)",
          900: "var(--indigo_900)",
          "200_01": "var(--indigo_200_01)",
        },
        light_blue: { 800: "var(--light_blue_800)" },
        light_green: { 900: "var(--light_green_900)" },
        lime: { 100: "var(--lime_100)" },
        orange: { 500: "var(--orange_500)", 700: "var(--orange_700)" },
        pink: { 500: "var(--pink_500)", a100: "var(--pink_a100)" },
        red: {
          100: "var(--red_100)",
          200: "var(--red_200)",
          300: "var(--red_300)",
          400: "var(--red_400)",
          500: "var(--red_500)",
          700: "var(--red_700)",
          800: "var(--red_800)",
        },
        teal: {
          400: "var(--teal_400)",
          500: "var(--teal_500)",
          800: "var(--teal_800)",
          a200: "var(--teal_a200)",
          a400: "var(--teal_a400)",
        },
        white: { a700: "var(--white_a700)" },
        gray_shadow: "var(--gray_shadow)",
      },
      boxShadow: {
        xs: "0 9px 18px 0 #00000026",
        sm: "0 9.53px 27px 0 #00000035",
        md: "0 3.53px 8px 0 #a5a5a535",
        lg: "0 21.18px 21px 0 #00000033",
        xl: "0 1.41px 2px 0 #00000014",
        "2xl": "0 0 13px 5px #00000029",
      },
      fontFamily: { inter: "Inter", glory: "Glory", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
