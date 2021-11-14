import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --ralewayFont: 'Raleway', sans-serif;
    --montserrat: 'Montserrat', sans-serif;
    --white: #ededed;
    --black: #131313;
    --lightOrange: #f9b146;
    --darkOrange: #F08019;
    --backgroundColor: #1f1f1f;
    --sectionColor: #212121;
    --regular: 400;
    --medium: 500;
    --extraBold: 800;
    --italic: italic;
    --shadow: -0.7rem -0.7rem .7rem rgba(163, 163, 163, 0.09),
    .7rem .7rem .7rem rgba(12, 12, 12, 0.73);
    --radius: .5rem;
  }

  html {
    color: var(--white);
    background: var(--backgroundColor);
    font-family: var(--ralewayFont);
    font-size: 10px;
  }

  
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input:focus,
  textarea:focus,
  a:focus {
    outline: 2px solid var(--darkOrange);
  }

`;

export default GlobalStyle;
