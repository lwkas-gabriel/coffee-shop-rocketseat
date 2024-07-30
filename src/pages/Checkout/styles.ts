import styled from "styled-components";

export const ContainerMain = styled.main`
    display: flex;
    justify-content: center;
    padding-top: 140px;
    gap: 32px;
    line-height: 130%;

    @media (max-width:800px){
        flex-direction: column-reverse;
    }
`

export const SectionForm = styled.section`
    width: 640px;
    display: flex;
    flex-direction: column;

    h4{
        font-family: "Baloo 2", sans-serif;
        font-weight: bold;
        font-size: 18px;
    }

    @media (max-width:800px){
        align-items: center;
    }

`

export const FormContainer = styled.div`
    padding: 40px;
    margin: 15px 0 12px 0;
    border-radius: 6px;
    background-color: ${props => props.theme["base-card"]};

    div{
        display: flex;
        gap: 8px;
        color: ${props => props.theme["yellow-dark"]};

        div{
            display: flex;
            flex-direction: column;
            
            h5{
                font-size: 16px;
                color: ${props => props.theme["base-subtitle"]};
            }

            p{
                font-size: 14px;
                color: ${props => props.theme["base-text"]};
            }
        }

        form{

        }
    }
`

export const PaymentSelectionSection = styled.div`
    width: 640px;
    border-radius: 6px;
    background-color: ${props => props.theme["base-card"]};
    padding: 40px;
    max-width: 90%;


    div{
        display: flex;
        color: ${props => props.theme["purple"]};
        gap: 12px;

        span{ 
            h5{
                font-size: 16px;
                font-weight: 400;
                color: ${props => props.theme["base-subtitle"]};
            }

            p{
                font-size: 14px;
                color: ${props => props.theme["base-text"]};
            }
        }
    }
`

export const PaymentOptions = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 32px;
    div{
        color: ${props => props.theme["light"]};
    }

    button{
        width: 178px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 18px;
        height: 50px;
        color: ${props => props.theme["base-text"]};
        border: none;
        line-height: 160%;
        font-size: 12px;
        transition: 0.5s;
        border-radius: 6px;

        &:hover{
            color: ${props => props.theme["base-subtitle"]};
            background-color: ${props => props.theme["base-hover"]};
        }



    }
`