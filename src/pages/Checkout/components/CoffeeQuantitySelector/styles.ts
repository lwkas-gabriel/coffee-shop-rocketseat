import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 20px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${props => props.theme["base-button"]};
    
    img{
        width: 64px;
        height: 64px;
    }

    .total-price{
        color: ${props => props.theme["base-text"]};
        font-weight: bold;
        font-size: 16px;
    }

    @media(max-width: 375px){
        gap: 5px;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    p{
        color: ${props => props.theme["base-subtitle"]}
    }
`

export const OperationContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    gap: 8px;

    .btn{
        color: ${props => props.theme["base-text"]};
        border: none;
        border-radius: 6px;
        background-color: ${props => props.theme["base-button"]};
        padding: 0 8px 0 8px;

        &:hover{
            background-color: ${props => props.theme["base-hover"]};
        }
        
        span{
            display: flex;
            align-items: center;
            color: ${props => props.theme["purple"]};

            p{
                color: ${props => props.theme["base-text"]};
            }
        }
    }
`