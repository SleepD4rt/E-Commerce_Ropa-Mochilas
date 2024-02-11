import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        
    }

    html {
        scroll-behavior: smooth;
        scrollbar-width: none;
        
    
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #020f1a;
        font-family: "Montserrat",sans-serif;
        color: white;
        overflow-x:hidden;

        
    }

    a {
        text-decoration: none;
        color: white;
    }
    a:visited {
        color: white;
    }
    li {
        list-style: none;
    }
`;
