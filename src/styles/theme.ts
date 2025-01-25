import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colors: {
    primary: "#141416", // Woodsmoke
    secondary: "#505052", // Abbey
    accent: "#fe4141", // Coral Red
    background: "#ffffff", // White
    text: "#141416",
    // Ek renkler:
    warning: "#f5a800", // Web Orange
    info: "#939394", // Manatee
    success: "#a5711f", // Mandalay
    highlight: "#f3cd6c", // Cream Can
    cardBg: "#f5f5f5",
  },
  borderRadius: "8px", // Bileşenleri biraz daha yuvarlatmak istediğimizde
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: "#ffffff",
    secondary: "#e0e0e0",
    accent: "#fe4141",
    background: "#141416",
    text: "#ffffff",
    warning: "#f5a800",
    info: "#939394",
    success: "#a5711f",
    highlight: "#f3cd6c",
    cardBg: "#1e1e20",
  },
  borderRadius: "8px",
};
