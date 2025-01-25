import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
      warning: string;
      info: string;
      success: string;
      highlight: string;
      cardBg: string;
    };
    borderRadius: string;
  }
}
