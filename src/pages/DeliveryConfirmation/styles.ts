import styled from "styled-components";

export const Container = styled.main`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const DeliveryInfoContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    >div{
        background: linear-gradient(white, white) padding-box, linear-gradient(to right, #DBAC2C, #8047F8) border-box;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 36px;
        border-bottom-left-radius: 36px;
        border: 1px solid transparent;
        padding: auto auto;
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