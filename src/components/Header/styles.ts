import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 32px 0 32px 0;

    nav{
        display: flex;
        align-items: center;
        gap: 12px;

        span{
            display: flex;
            align-items: center;
            gap: 2px;
            color: ${props => props.theme.purple};
            background-color: ${props => props.theme["purple-light"]};
            padding: 8px;
            border-radius: 6px;
            
            p{
                color: ${props => props.theme["purple-dark"]};
            }
        }

        a{
            display: flex;
            align-items: center;
            text-decoration: none;
            color: ${props => props.theme["yellow-dark"]};
            background-color: ${props => props.theme["yellow-light"]};
            padding: 8px;
        }

    }
`;