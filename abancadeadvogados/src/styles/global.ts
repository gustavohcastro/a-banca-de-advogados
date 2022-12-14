import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }
    
    body {
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
      font: 400 14px Poppins, sans-serif;
      
      @media (min-width: 768px){
        max-width: 100vw;
        overflow-x: hidden;
      }
      button, a{
          cursor: pointer;
      }
    }
    `
