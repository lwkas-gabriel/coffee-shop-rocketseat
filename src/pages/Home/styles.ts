import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

export const BannerSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 92px;
    gap: 56px;
    max-width: 90%;

    @media (max-width:1024px){
        flex-direction: column-reverse;

        img{
            max-width: inherit;
        }
    }

    /* img{
        height: 50%;
        width: 50%;
    } */
`

export const InfoSection = styled.section`
    max-width: 588px;
    display: flex;
    flex-direction: column;
    gap: 86px;

    h1{
        font-family: 'Baloo 2';
        font-weight: bolder;
        font-size: 32px;
        line-height: 130%;
        color: ${props => props.theme["base-title"]}
    }

    p{
        font-size: 20px;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]}
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const BulletsContainer = styled.div`
    width: inherit;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width:600px) {
        justify-content: center;
    }
`

export const BulletContaier = styled.div`
    height: fit-content;
    display: flex;
    align-items: center;
    gap: 12px;

    p{
        font-size: 16px;
    }
    
`;

export const Bullet = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    width: fit-content;
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

export const StoreSection = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 90%;
    margin-top: 152px;
    margin-bottom: 50px;

    h2{
        text-align: left;
        font-family: "Baloo 2";
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 54px;
        font-weight: bolder;
        line-height: 130%;
        font-size: 32px;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    max-width: 1120px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
`