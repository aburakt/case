import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: url('/bg.avif') no-repeat center center fixed;
    background-size: cover;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    position: relative;
    
    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.4);
      z-index: -1;
    }
  }
`;

export default GlobalStyles;
