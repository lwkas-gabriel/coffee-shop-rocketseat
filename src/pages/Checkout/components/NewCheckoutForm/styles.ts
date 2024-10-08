import styled from "styled-components";

export const DeliveryInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 40px;
    margin: 15px 0 12px 0;
    border-radius: 6px;
    background-color: ${props => props.theme["base-card"]};

    div{
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: ${props => props.theme["yellow-dark"]};

        .title{
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
    }

    .first-section{
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            min-width: 100%;

            .cep{
                max-width: 200px;
            }
        }

        .second-section{
            display: flex;
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
            min-width: 100%;

            :last-child{
                flex: 1;
            }
        }

        .third-section{
            display: flex;
            flex-direction: row;
            width: 100%;

            :first-child{
                max-width: 200px;
            }

            :nth-child(2){
                flex: 1;
            }

            :last-child{
                width: 60px;
            }
        }

        @media (max-width: 560px) {
            .first-section{
                .cep{
                    max-width: 100%;
                }
            }

            .third-section{
                flex-direction: column;

                :first-child{
                    max-width: 100%;
                }

                :nth-child(2){
                    flex: none;
                    width: 100%;
                }

                :last-child{
                    width: 100%;
                }
            }
        }
`

export const Input = styled.input`
        height: 42px;
        padding-left: 12px;
        background-color: ${props => props.theme["base-button"]};
        border: transparent;
        border-radius: 4px;
        color: ${props => props.theme["base-text"]};
        font-size: 14px;
        //min-width: 200px;

        &:focus{
            outline: none;
            box-shadow: 0 0 0 1px ${props => props.theme["yellow-dark"]};
        }

        @media (max-width: 560px) {
            width: 100%;
        }
`

export const PaymentSelectionSection = styled.div`
    max-width: 100%;
    border-radius: 6px;
    background-color: ${props => props.theme["base-card"]};
    padding: 40px;

    div{
        display: flex;
        color: ${props => props.theme["purple"]};
        gap: 12px;

        div{
            display: flex;
            flex-direction: column;

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

export const PaymentOptions = styled.fieldset`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    gap: 12px;
    border: none;

    div{
        display: flex;
        align-items: center;
        color: black;
        background-color: ${props => props.theme["base-button"]};
        font-size: 12px;
        padding: 16px;
        border-radius: 6px;
        transition: .5s;

        &:hover{
            background-color: ${props => props.theme["base-hover"]};
            color: ${props => props.theme["base-subtitle"]};
        }

        &.checked{
            border: 1px solid ${props => props.theme.purple};
            background-color: ${props => props.theme["purple-light"]};
        }

        .purple-icon{
            color: ${props => props.theme["purple"]};
        }

        input[type="radio"]{
            display: none;
            appearance: none;
        }
    }

    @media (max-width: 569px){
        flex-direction: column;

        div{
            width: 160px;
        }
    }
`