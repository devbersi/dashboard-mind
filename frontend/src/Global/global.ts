import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;

        --blue-ligth: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, input, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
        color: white;
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');
        unicode-range: U+0370-03FF;
}
`;
