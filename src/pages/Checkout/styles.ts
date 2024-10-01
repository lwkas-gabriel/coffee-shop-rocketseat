import styled from "styled-components";

export const ContainerMain = styled.main`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 100px;
    gap: 32px;
    line-height: 130%;
    
    form{
        width: fit-content;
        display: flex;
        gap: 32px;

        @media (max-width:1140px){
            align-items: center;
            flex-direction: column;
        }
    }
`

export const SectionForm = styled.section`
    width: 640px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;

    h4{
        font-family: "Baloo 2", sans-serif;
        font-weight: bold;
        font-size: 18px;
    }
`

export const CheckoutPriceContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 550px;

    h4{
        font-family: "Baloo 2";
        font-size: 18px;
        color: ${props => props.theme["base-subtitle"]};
    }

    @media(max-width:1140px){
        width: 90%;
    }
`

export const CheckoutPriceConfirmationContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 10% 5% 10% 5%;
    margin-top: 15px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;

    .container{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

`

export const TotalInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 25px;

    span{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

`

export const ConfirmButton = styled.button`
    width: 100%;
    border-radius: 6px;
    border: none;
    padding: 12px 0 12px 0;
    color: ${props => props.theme["white"]};
    background-color: ${props => props.theme["yellow"]};
    margin-top: 24px;
    transition: 0.5s;

    &.not-available{
        cursor: not-allowed;
        opacity: 0.75;
    }

    &:hover{
        background-color: ${props => props.theme["yellow-dark"]};
    }
`

