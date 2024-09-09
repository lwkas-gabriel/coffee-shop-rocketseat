import styled from "styled-components";

export const Container = styled.main`
    padding-top: 100px;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;

    >section{
        display: flex;
        justify-content: center;
        width: 80%;
        justify-content: space-evenly;
        /* gap: 32px; */

        @media (max-width: 1024px){
            flex-direction: column-reverse;
            align-items: center;
        }
    }
`

export const DeliveryInfoContainer = styled.section`
    display: flex;
    width: 30%;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1rem;
    background: linear-gradient(white, white) padding-box, linear-gradient(to right, #DBAC2C, #8047F8) border-box;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border: 1px solid transparent;
    padding: auto auto;
    gap: 32px;

    @media (max-width: 1024px){
        max-width: 450px;
    }

        >section{
            display: flex;
            width: fit-content;
            flex-direction: row;
            align-items: center;
            height: fit-content;
            gap: 5px;
            padding: 0px 40px 0 40px;
        }

`

export const InfoHeader = styled.div`
    h2{
        color: ${props => props.theme["yellow-dark"]};
        font-size: 32px;
        font-family: "Baloo 2";
        margin-bottom: 4px;
    }

    >p{
        margin-bottom: 40px;
        color: ${props => props.theme["base-subtitle"]};
        font-size: 20px;
    }
`

export const Bullet = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    width: 32px;
    height: 32px;
    border-radius: 1000px;
    color:  ${props => props.theme["white"]};

    &.orange{
        background-color: ${props => props.theme["yellow-dark"]};
    }

    &.black{
        background-color: ${props => props.theme["base-text"]};
    }

    &.yellow{
        background-color: ${props => props.theme.yellow};
    }

    &.purple{
        background-color: ${props => props.theme["purple"]};
    }
`