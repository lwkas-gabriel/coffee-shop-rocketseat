import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    max-width: 256px;
    padding: 0 20px 20px 20px;
    background-color: ${props => props.theme["purple-light"]};
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    text-align: center;
    line-height: 130%;

    img{
        width: 120px;
        height: 120px;
        margin-top: -20px;
    }

    span{
        display: flex;
        flex-wrap: wrap;
        gap: 4px;

        p{
            font-size: 10px;
            color: ${props => props.theme["yellow-dark"]};
            background-color: ${props => props.theme["yellow-light"]};
            padding: 4px 8px;
            border-radius: 100px;
        }
    }

    h3{
        width: fit-content;
        font-family: "Baloo 2", sans-serif;
        color: ${props => props.theme["base-title"]};
        font-size: 20px;
    }

    p{
        max-width: 216px;
        color: ${props => props.theme["base-label"]};
        font-size: 14px;
        
    }
`

export const PriceContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;

    p{
        color: ${props => props.theme["base-text"]};

        strong{
            font-weight: bolder;
            font-size: 24px;
        }
    }

    input{
        text-align: center;
        max-width: 20px;
    }
`

export const Input = styled.div`
    display: flex;
    align-items: center;
    
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
        a{
            display: flex;
            align-items: center;
            color: ${props => props.theme["white"]};
            background-color: ${props => props.theme["purple-dark"]};
            padding: 8px;
            border-radius: 6px;
            margin-left: 8px;

            &:hover{
                background-color: ${props => props.theme["purple"]};
            }
    }
`