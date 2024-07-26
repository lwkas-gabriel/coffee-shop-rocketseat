import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 92px;
    gap: 56px;
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

const Bullet = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    width: fit-content;
    border-radius: 1000px;
`

export const BulletVariationOrange = styled(Bullet)`
    color:  ${props => props.theme["white"]};
    background-color: ${props => props.theme["yellow-dark"]};
`

export const BulletVariationBlack = styled(Bullet)`
    color:  ${props => props.theme["white"]};
    background-color: ${props => props.theme["base-text"]};
`

export const BulletVariationYellow = styled(Bullet)`
    color:  ${props => props.theme["white"]};
    background-color: ${props => props.theme.yellow};
`

export const BulletVariationPurple = styled(Bullet)`
    color:  ${props => props.theme["white"]};
    background-color: ${props => props.theme["purple"]};
`