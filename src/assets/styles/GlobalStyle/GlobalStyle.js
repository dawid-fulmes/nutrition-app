import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: ${({ theme }) => theme.font.family.roboto};
    }
`;

export default GlobalStyle;
