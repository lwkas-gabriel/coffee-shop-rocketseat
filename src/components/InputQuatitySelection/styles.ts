import styled from "styled-components";

export const InputCotainer = styled.div`

    input{
        text-align: center;
        width: 30px;
        height: 38px;
        padding: 9px 0 9px 0;
        background-color: ${props => props.theme["base-button"]};
        border: none;

        &::-webkit-outer-spin-button{
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            margin: 0;
        }

        &::-webkit-inner-spin-button{
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            margin: 0;
        }
    }

    button{
            color: ${props => props.theme["purple"]};
            height: 38px;
            padding: 0 9px;
            background-color: ${props => props.theme["base-button"]};
            border: none;
            transition: 0.5s;
            cursor: pointer;
            font-weight: bold;

            &:first-of-type{
                border-top-left-radius: 6px;
                border-bottom-left-radius: 6px;
            }
            &:nth-of-type(2){
                border-top-right-radius: 6px;
                border-bottom-right-radius: 6px;
            }

            &:hover{
                color: ${props => props.theme["purple-dark"]};
            }
        }
`