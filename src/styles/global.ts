import { createGlobalStyle } from "styled-components";
import githubBackground from  '../assets/github-background.svg'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font: 18px roboto, sans-serif;
        ::selection {
            background:#2AFEF1;
            color:#000;
        }
    }
    body{
        background:#f3f3f4 url(${githubBackground}) no-repeat 70% top;
        
        @keyframes fadein {
        from { opacity: 0.3;
       }
        to { opacity: 1; } /* Padrão */
        }
        @keyframes deslocamento {
        from { margin-top: 200px;}
        to {  } /* Padrão */
        }
    }
    button{
        cursor: pointer;
    }
    #root{
        max-width: 960px;
        margin: 0 auto;
        padding:40px 20px;
    }
`;

