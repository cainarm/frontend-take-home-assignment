import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
  }

  body, html {
    background-color: #F4F8FA;
  }
`;