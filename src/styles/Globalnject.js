import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        background: #bbb; 
        font-family: 'Open-Sans', Helvetica, Sans-Serif;
    }
`;
 
export default GlobalStyle;