import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";

import { deviceSizes } from "./themes";

const BaseStyles = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
  }
  
  html, body {
    height: 100%;
  }
  
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    background-color: #f8f8f8;
  }
  
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  
  input, button, textarea, select {
    font: inherit;
  }
  
  .flow > *:where(:not(:first-child)) {
    margin-top: var(--flow-space, 1rem);
  }

  a{
    text-decoration: none;
  }


body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
picture {
  margin: 0px;
  overflow-wrap: break-word;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

ul{
  margin: 0;
  padding: 0;
}


`;
const GlobalStyles = () => (
  <>
    <BaseStyles />
  </>
);

export default GlobalStyles;
