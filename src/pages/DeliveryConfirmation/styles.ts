import styled from "styled-components";

export const Container = styled.main`
    padding-top: 100px;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;

    >section{
        display: flex;
        justify-content: center;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    @media (max-width: 1024px){
        flex-direction: column-reverse;
        gap: 1rem;

        img{
            width: 60%;
        }
    }
`

export const DeliveryInfoContainer = styled.section`
    display: flex;
    width: 500px;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1rem;
    background: linear-gradient(white, white) padding-box, linear-gradient(to right, #DBAC2C, #8047F8) border-box;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border: 1px solid transparent;
    padding-top: 30px;
    padding-bottom: 30px;
    gap: 32px;

    >section{
        display: flex;
        width: fit-content;
        flex-direction: row;
        align-items: center;
        height: fit-content;
        flex: 1;
        gap: 5px;
        padding: 0px 40px 0 40px;
    }

    @media (max-width: 1024px){
        width: 80%;
        margin-top: 20px;
        padding: 30px 0;
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

    @media (max-width: 1024px){
        width: 80%;
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

export const ErrorImage = styled.img`
    width: 40%;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`