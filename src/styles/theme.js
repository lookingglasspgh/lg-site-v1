import { extendTheme } from "@chakra-ui/react";

import { Outfit, Spline_Sans } from "next/font/google";

import { Button, Divider, Heading, Text } from "./components";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

const splineSans = Spline_Sans({
  subsets: ["latin"],
  display: "swap",
});

const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

export const colors = {
  black: {
    50: "#B3B3B9",
    100: "#9A9AA1",
    200: "#676872",
    300: "#353543",
    400: "#1B1C2C",
    500: "#020314",
    transparent: "rgba(2,3,20,0.65)",
  },
  fuchsia: {
    500: "#B332BE",
  },
  gold: {
    100: "#EFD273",
    200: "#ECCB5C",
    300: "#E9C345",
    400: "#E7BC2D",
    500: "#E4B416",
    600: "#CDA214",
    700: "#B69012",
    800: "#A07E0F",
    900: "#896C0D",
  },
  ivory: {
    100: "#F5F4EE",
    200: "#F4F2EB",
    300: "#F2F0E8",
    400: "#F1EEE5",
    500: "#EFECE2",
    600: "#D7D4CB",
    700: "#BFBDB5",
    800: "#A7A59E",
    900: "#8F8E88",
  },
  pink: {
    50: "#F299C5",
    100: "#EB66A9",
    200: "#E84D9A",
    300: "#E5338C",
    400: "#E11A7D",
    500: "#DE006F",
    600: "#C80064",
    700: "#B20059",
    800: "#9B004E",
    900: "#850043",
  },
  purple: {
    100: "#9C84CD",
    200: "#8C70C5",
    300: "#7B5BBD",
    400: "#6B47B4",
    500: "#5A32AC",
    600: "#512D9B",
    700: "#48288A",
    800: "#3F2378",
    900: "#361E67",
  },
};

const fonts = {
  heading: outfit.style.fontFamily,
  body: splineSans.style.fontFamily,
};

const fontSizes = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const styles = {
  global: {
    body: {
      bg: "ivory.500",
    },
  },
};

export const theme = extendTheme({
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  components: {
    Button,
    Divider,
    Heading,
    Text,
  },
  styles,
});
