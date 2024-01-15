import { createGlobalStyle } from "styled-components";

const GlobalStyleCss = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: white;
  }
`;

export default GlobalStyleCss;
