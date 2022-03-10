import CircularBold from "../fonts/Circular/CircularStd-Bold.woff2";
import CircularMedium from "../fonts/Circular/CircularStd-Medium.woff2";
import CircularLight from "../fonts/Circular/CircularLight.woff2";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     @font-face {
        font-family: 'Circular';
        src: local('Circular'), url(${CircularBold}) format('woff2');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Circular';
        src: local('Circular'), url(${CircularMedium}) format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Circular';
        src: local('Circular'), url(${CircularLight}) format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    * {
        font-family: 'Circular';
    }

    body {
        margin: 0;
        background-color: ${({ theme }) => theme.colors.bodyBackground};
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    li,
    a,
    button {
        margin: 0;
    }

    ul {
        list-style: none;
        padding: 0;
    }
`;
