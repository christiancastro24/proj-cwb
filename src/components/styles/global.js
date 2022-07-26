import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFF;
        --dark-medium: rgba(0, 0, 0, 60);
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        height: 100vh;
        z-index: 4000;
        margin: 0;    
        padding: 0;    
        font-family: sans-serif;    
        transition: all 0.25s linear;
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    button:hover, a:hover  {
        filter: brightness(90%);
    }
    a {
        color: var(--white);
    }
`