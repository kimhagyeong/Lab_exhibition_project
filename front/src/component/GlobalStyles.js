import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
        -ms-user-select: none; !important;
        -moz-user-select: -moz-none; !important;
        -webkit-user-select: none; !important;
        -khtml-user-select: none; !important;
        user-select:none; !important;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        position:relative;
    }
    section{
        animation: fadein 0.5s ease 1;
    }
    @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
`;

export default globalStyle;