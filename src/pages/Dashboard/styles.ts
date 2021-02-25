import styled, {css} from 'styled-components';
interface FormProps{
    hasError: Boolean;
}
export const Title  = styled.h1`
    animation: fadein 5s;
    font-size: 48px;
    color: #000;
    font-weight: 700;
    margin-top: 80px;

    max-width: 450px;
    line-height:56px;

`; 

export const Form = styled.form<FormProps>`
    animation: fadein 5s;
    margin-top: 40px;
    max-width: 700px;                   

    display: flex;

    input{
        flex:1;

        background-color:  #fff ;
        height:70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        &::placeholder{
            color: #a8a8b3;
        }
        border: 2px solid #fff;
        border-right: 0;
        ${(props)=>props.hasError && css `
            border-color: #a51b0b;
        `}
    }
    button{
        width:210px;
        height:70px;
        border: 0;
        border-radius: 0 5px 5px 0;
        background-color:gray;
        color: #fff;
        font-weight: 700;
        transition: all 2s ease-out;

        &:hover{
            
            background-color:#000;
            color: #fff;  
        }
    }
`;
export const Error = styled.span`
    display:block;
     color:#a51b0b;
     margin-top: 8px;

`;

export const Repositories = styled.div`

    animation: deslocamento 5s;
    margin-top: 80px;
    max-width:700px;

    a + a {
        margin-top: 16px;
    }

    a{
        background:  #fff;
        border-radius: 5px;
        width:100%;
        padding: 24px;
        display:block;
        text-decoration: none;

        display:flex;
        align-items:center;
        
        transition: transform 1s;

        &:hover{
            transform: translateX(30px);
        }

        img{
            width: 64px;
            height: 64px;
            border-radius: 50%50%;
        }

        div{
            
            margin-left: 16px;

            strong{
                font-size: 20px;
                color: #3d3d4d;
                font-weight: 700;
            }
            p{
                font-size:18px;
                color: #a8a8a3;
                margin-top: 4px;
            }
        }
        svg{
            margin-left: auto;
            color: #cbcbd6;
        }
        
    }
`;